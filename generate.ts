import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import camelcase from "camelcase";

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
	for (const file in files) {
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
type JsonArgument = { [key: string]: string };
const writeJson = async (file: string, json: JsonArgument) => {
	await writeFile(file, JSON.stringify(json, null, 2));
};
