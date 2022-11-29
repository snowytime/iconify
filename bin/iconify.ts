import { check_unique } from "./unique.js";
import { generate_readme } from "./readme.js";
import { build_package, Frameworks } from "./build.js";
import { release, ReleaseEnum } from "./release.js";

const build_iconify = async () => {
	// we need to first run the check
	try {
		await check_unique();
		await generate_readme();
		await build_package(Frameworks.React);
		await build_package(Frameworks.Vue);
		release(ReleaseEnum.Major);
	} catch (e) {
		e?.();
	}
};

build_iconify();
