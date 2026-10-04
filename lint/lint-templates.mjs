#!/usr/bin/env node
// phpBB-specific template checks that generic Twig linters cannot do: they choke on phpBB tags
// such as EVENT and INCLUDECSS.
// Usage: node lint/lint-templates.mjs [template dir ...]
// Without arguments it checks the template directory of every pbwow3* style in the repository.
// Errors exit 1. Warnings are printed but do not fail, so a cleanup rule can be tracked before it is
// enforced; switch its severity to 'error' when the cleanup lands.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dirs = process.argv.length > 2
	? process.argv.slice(2)
	: readdirSync('.').filter(d => d.startsWith('pbwow3')).sort().map(d => join(d, 'template')).filter(d => existsSync(d));

// Template variables owned by extensions. A style must not reference them; the extension injects
// its markup through a template event instead.
const EXTENSION_VARS = ['HEADERLINKS_CODE', 'TOPBAR_CODE', 'ADS_INDEX_CODE', 'RECENT_TOPICS_DISPLAY'];

const RULES = [
	{ id: 'legacy-tag', severity: 'error', re: /<!--\s*(IF|ELSEIF|ELSE|ENDIF|BEGIN|BEGINELSE|END|INCLUDE\w*|DEFINE|UNDEFINE|EVENT)\b/, msg: 'legacy <!-- ... --> template tag; use Twig {% %}' },
	// Warnings until #41 lands.
	{ id: 'legacy-var', severity: 'warning', re: /(?<!\{)\{(L_|LA_|S_|U_|T_)?[A-Z][A-Z0-9_]*(\.[A-Z][A-Z0-9_]*)?\}(?!\})/, msg: 'legacy {VAR} output; use {{ VAR }} / {{ lang() }}' },
	{ id: 'define', severity: 'warning', re: /\{%-?\s*(DEFINE|UNDEFINE)\b/, msg: 'DEFINE; use {% set %}' },
	{ id: 'definition', severity: 'warning', re: /\bdefinition\.(?!STYLESHEETS\b|SCRIPTS\b)\w+/, msg: 'definition.X; read the {% set %} variable instead' },
	{ id: 'legacy-operator', severity: 'warning', re: /\{%.*?\s(eq|neq|ne|gt|lt|gte|lte|mod)\s.*?%\}/, msg: 'legacy comparison operator; use == != > < >= <= %' },
	{ id: 'extension-var', severity: 'error', re: new RegExp(`\\b(${EXTENSION_VARS.join('|')})\\b`), msg: 'extension-owned variable; the extension should inject it via a template event' },
	// Cleanup rules, enforced once the whitespace cleanup lands.
	{ id: 'trailing-whitespace', severity: 'warning', re: /[ \t]+$/, msg: 'trailing whitespace' },
	{ id: 'space-indent', severity: 'warning', re: /^ {2,}\S/, msg: 'space indentation; use tabs' },
];

const counts = { error: 0, warning: 0 };
for (const dir of dirs) {
	for (const file of readdirSync(dir).filter(f => f.endsWith('.html')).sort()) {
		const lines = readFileSync(join(dir, file), 'utf8').split(/\r?\n/);
		lines.forEach((line, i) => {
			for (const rule of RULES) {
				const match = line.match(rule.re);
				if (match) {
					counts[rule.severity]++;
					console.log(`${join(dir, file)}:${i + 1}  ${rule.severity}  ${rule.id}  ${rule.msg}  [${match[0].trim().slice(0, 50)}]`);
				}
			}
		});
	}
}

console.log(`${counts.error} error(s), ${counts.warning} warning(s)`);
process.exit(counts.error ? 1 : 0);
