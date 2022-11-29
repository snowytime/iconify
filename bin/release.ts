import { exec } from "node:child_process";

/**
 * brings together all the other functions in building, verifying uniqueness, building readme, and releasing
 */

export async function release() {
	try {
		exec('git add . && git commit -m "release" && git push origin master');
		// release react
		exec("cd react && npm version patch && npm publish");
		// release vue
		exec("cd vue && npm version patch && npm publish");
	} catch (e) {
		throw () => console.log(`❌ Error performing release.`);
	}
}

release();
