import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import camelcase from "camelcase";
import svgr from "@svgr/core";
import * as babel from "@babel/core";
import { promisify } from "node:util";

const rimraf = promisify(require("rimraf"));

import { compile as compileVue } from "@vue/compiler-dom";

// recursor that handles traversing nested trees
const recursiveSearch = async (directory: string, fileArr: string[]) => {
	const filesInDirectory = await fs.readdir(directory);
	for (const file of filesInDirectory) {
		const absolute = join(directory, file);
		const stat = await fs.stat(absolute);
		if (stat.isDirectory()) {
			await recursiveSearch(absolute, fileArr);
		} else {
			fileArr.push(absolute);
		}
	}
};

// get all the files paths in the src folder
const getFiles = async (dirPath: string) => {
	const files: string[] = [];
	await recursiveSearch(dirPath, files);
	return files;
};

// get the icons and package them for processing
enum IconCategory {
	Programming = "programming",
	Countries = "countries",
	Ui = "ui"
}
interface PackagedIcon {
	componentName: string;
	svg: string;
}
const getIcons = async (category: IconCategory) => {
	const files = await getFiles(`./src/${category}`);
	const packaged: PackagedIcon[] = [];
	for (const file of files) {
		// repackage
		const arr = file.split("/");
		packaged.push({
			svg: await fs.readFile(`./${file}`, "utf8"),
			componentName: `${camelcase(
				arr[arr.length - 1].replace(/\.svg$/, ""),
				{
					pascalCase: true
				}
			)}Icon`
		});
	}
	return packaged;
};

// prepare the root index.js inside the category folders
enum IconFormat {
	Cjs = "cjs",
	Esm = "esm"
}
const exportIcons = (
	icons: PackagedIcon[],
	format: IconFormat,
	includeExtension = true
) => {
	return icons
		.map(({ componentName }) => {
			let extension = includeExtension ? ".js" : "";
			if (format === IconFormat.Esm) {
				return `export { default as ${componentName} } from './${componentName}${extension}'`;
			}
			return `module.exports.${componentName} = require("./${componentName}${extension}")`;
		})
		.join("\n");
};

// handler to write the compiled index.js
const writeFile = async (file: string, text: string) => {
	await fs.mkdir(dirname(file), { recursive: true });
	await fs.writeFile(file, text, "utf8");
};

// handler to write the package.json within each exported category
type JsonArgument = { [key: string]: string | boolean };
const writeJson = async (file: string, json: JsonArgument) => {
	await writeFile(file, JSON.stringify(json, null, 2));
};

// handle the svg logic to create the components
let transform = {
	react: async (svg: string, componentName: string, format: string) => {
		let component = await svgr(
			svg,
			{ ref: true, titleProp: true, props: { name: "string" } },
			{ componentName }
		);
		let { code } = await babel.transformAsync(component, {
			plugins: [
				[
					require("@babel/plugin-transform-react-jsx"),
					{ useBuiltIns: true }
				]
			]
		});

		if (format === "esm") {
			return code;
		}

		return code
			.replace(
				'import * as React from "react"',
				'const React = require("react")'
			)
			.replace("export default", "module.exports =");
	},
	vue: (svg: string, componentName: string, format: string) => {
		let { code } = compileVue(svg, {
			mode: "module"
		});

		if (format === "esm") {
			return code.replace("export function", "export default function");
		}

		return code
			.replace(
				/import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
				(_match, imports, _quote, mod) => {
					let newImports = imports
						.split(",")
						.map((i) => i.trim().replace(/\s+as\s+/, ": "))
						.join(", ");

					return `const { ${newImports} } = require("${mod}")`;
				}
			)
			.replace(
				"export function render",
				"module.exports = function render"
			);
	}
};

// the build function
enum Frameworks {
	React = "react",
	Vue = "vue"
}
const build = async (
	framework: Frameworks,
	category: IconCategory,
	format: IconFormat
) => {
	let outDir = `./${framework}/${category}`;
	if (format === "esm") {
		outDir += "/esm";
	}
	// get the icons
	let icons = await getIcons(category);
	await Promise.all(
		icons.flatMap(async ({ componentName, svg }) => {
			let content = await transform[framework](
				svg,
				componentName,
				format
			);
			let types =
				framework === Frameworks.React
					? `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'> & { title?: string, titleId?: string; height?: string; color?: string }): JSX.Element;\nexport default ${componentName};\n`
					: `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`;

			return [
				writeFile(`${outDir}/${componentName}.js`, content),
				...(types
					? [writeFile(`${outDir}/${componentName}.d.ts`, types)]
					: [])
			];
		})
	);
	await writeFile(`${outDir}/index.js`, exportIcons(icons, format));

	await writeFile(
		`${outDir}/index.d.ts`,
		exportIcons(icons, IconFormat.Esm, false)
	);
};

// main function
const main = async (framework: Frameworks) => {
	const cjsPackageJson = { module: "./esm/index.js", sideEffects: false };
	const esmPackageJson = { type: "module", sideEffects: false };

	console.log(`Building ${framework} package...`);

	await Promise.all([
		rimraf(`./${framework}/programming/**/*`),
		rimraf(`./${framework}/countries/**/*`)
	]);

	await Promise.all([
		// programming
		build(framework, IconCategory.Programming, IconFormat.Cjs),
		build(framework, IconCategory.Programming, IconFormat.Esm),
		writeJson(
			`./${framework}/programming/esm/package.json`,
			esmPackageJson
		),
		writeJson(`./${framework}/programming/package.json`, cjsPackageJson),
		// europe
		build(framework, IconCategory.Countries, IconFormat.Cjs),
		build(framework, IconCategory.Countries, IconFormat.Esm),
		writeJson(`./${framework}/countries/esm/package.json`, esmPackageJson),
		writeJson(`./${framework}/countries/package.json`, cjsPackageJson)
	]);

	return console.log(`Finished building ${framework} package.`);
};

let [framework] = process.argv.slice(2);

if (!framework) {
	throw new Error("Please specify a framework");
}

main(framework as Frameworks);
