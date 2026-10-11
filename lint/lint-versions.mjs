#!/usr/bin/env node
// Checks that every relative @import in each style's theme CSS carries a ?v= cache-busting string and
// that each ?v= matches the version in its composer.json, so a version bump cannot leave browsers on
// cached CSS from the previous release.
// Usage: node lint/lint-versions.mjs
// Mismatches exit 1.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

let errors = 0;
// phpBB 4.0 reads a style's version from composer.json; style.cfg is gone
for (const style of readdirSync('.').filter(d => d.startsWith('pbwow3') && existsSync(join(d, 'composer.json'))).sort()) {
	const version = JSON.parse(readFileSync(join(style, 'composer.json'), 'utf8')).version;
	if (!version) {
		errors++;
		console.log(`${join(style, 'composer.json')}  error  no version`);
		continue;
	}
	const themeDir = join(style, 'theme');
	if (!existsSync(themeDir)) {
		continue;
	}
	for (const file of readdirSync(themeDir, { recursive: true }).filter(f => f.endsWith('.css')).sort()) {
		const lines = readFileSync(join(themeDir, file), 'utf8').split(/\r?\n/);
		lines.forEach((line, i) => {
			// A relative @import without ?v= is never refetched after an upgrade
			const imported = line.match(/@import\s+url\(\s*["']?([^"')]+)/);
			if (imported && !/^[a-z]+:|^\/\//i.test(imported[1]) && !/\?v=/.test(imported[1])) {
				errors++;
				console.log(`${join(themeDir, file)}:${i + 1}  error  @import ${imported[1]} has no ?v= string`);
			}
			for (const [, used] of line.matchAll(/\?v=([0-9][0-9A-Za-z.-]*)/g)) {
				if (used !== version) {
					errors++;
					console.log(`${join(themeDir, file)}:${i + 1}  error  ?v=${used} does not match version ${version}`);
				}
			}
		});
	}
}

console.log(`${errors} error(s)`);
process.exit(errors ? 1 : 0);
