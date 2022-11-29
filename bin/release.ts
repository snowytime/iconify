import { exec } from "node:child_process";
import { promisify } from "node:util";

const exec_promise = promisify(exec);

/**
 * brings together all the other functions in building, verifying uniqueness, building readme, and releasing
 */
export enum ReleaseEnum {
	Patch = "patch",
	Minor = "minor",
	Major = "major"
}

export async function release(release: ReleaseEnum) {
	try {
		// await execSync('git add . && git commit -m "release" && git push origin master');
		// // release react
		// await execSync("cd react && npm version patch && npm publish");
		// // release vue
		// await execSync("cd vue && npm version patch && npm publish");

		// begin by incrementing packages properly
		await exec_promise(`cd react && npm version ${release}`);
		await exec_promise(`cd vue && npm version ${release}`);
		// finish off git
		await exec_promise(
			`git add . && git commit -m '🥳 auto ${release}' && git push origin master`
		);
		// release each package
		await exec_promise("cd react && npm release");
		await exec_promise("cd vue && npm release");
		console.log(`✅ ${release} successful`);
	} catch (e) {
		throw () => console.log(`❌ Error performing release.`);
	}
}
