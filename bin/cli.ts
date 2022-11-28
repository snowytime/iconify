/**
 * Bringing all the cli options together
 */

import { Command } from "commander";
import { generate_readme } from "./readme.js";
import { check_unique } from "./unique.js";
const program = new Command("iconify");

program.command("unique").action(async () => {
	await check_unique();
});

program.command("readme").action(async () => {
	await generate_readme();
});

program.parse(process.argv);
