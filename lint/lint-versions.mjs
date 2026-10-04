#!/usr/bin/env node
// Checks that every relative @import in each style's theme CSS carries a ?v= cache-busting string and
// that each ?v= matches the style_version in its style.cfg, so a version bump cannot leave browsers on
// cached CSS from the previous release.
// Usage: node lint/lint-versions.mjs
// Mismatches exit 1.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

let errors = 0;
for (const style of readdirSync('.').filter(d => d.startsWith('pbwow3') && existsSync(join(d, 'style.cfg'))).sort()) {
	const cfg = readFileSync(join(style, 'style.cfg'), 'utf8').match(/^style_version\s*=\s*(\S+)/m);
	if (!cfg) {
		errors++;
		console.log(`${join(style, 'style.cfg')}  error  no style_version`);
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
			for (const [, version] of line.matchAll(/\?v=([0-9][0-9A-Za-z.-]*)/g)) {
				if (version !== cfg[1]) {
					errors++;
					console.log(`${join(themeDir, file)}:${i + 1}  error  ?v=${version} does not match style_version ${cfg[1]}`);
				}
			}
		});
	}
}

console.log(`${errors} error(s)`);
process.exit(errors ? 1 : 0);
