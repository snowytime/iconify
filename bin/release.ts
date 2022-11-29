import { exec } from "node:child_process";
import { promisify } from "node:util";

const exec_promise = promisify(exec);

export enum ReleaseEnum {
	Patch = "patch",
	Minor = "minor",
	Major = "major"
}

export async function release(release: ReleaseEnum) {
	try {
		// begin by incrementing packages properly
		await exec_promise(`cd react && npm version ${release}`);
		await exec_promise(`cd vue && npm version ${release}`);
		// finish off git
		await exec_promise(
			`git add . && git commit -m '🥳 auto ${release}' && git push origin master`
		);
		// release each package
		await exec_promise("cd react && npm publish");
		await exec_promise("cd vue && npm publish");
		console.log(`✅ ${release} successful`);
	} catch (e) {
		throw () => console.log(`❌ Error performing release.`);
	}
}
