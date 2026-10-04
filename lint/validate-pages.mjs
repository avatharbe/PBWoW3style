#!/usr/bin/env node
// Validates rendered board pages with the W3C Nu HTML Checker (the engine behind validator.w3.org).
// Needs a running board with this style installed, and Java (vnu-jar downloads one if missing).
// Usage: BOARD_URL=http://localhost/forum/ STYLE_ID=3 npm run validate
//   BOARD_URL  board root, default http://localhost/avathar/forum/
//   STYLE_ID   optional; appends &style=N, which phpBB honours only while override_user_style is off
// Errors only: the checker's info notes (e.g. trailing slashes on void elements) are left out.
// Board content and third-party extensions show up too; judge each error before blaming the style.
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import vnuJar from 'vnu-jar';

const board = (process.env.BOARD_URL ?? 'http://localhost/avathar/forum/').replace(/\/?$/, '/');
const style = process.env.STYLE_ID;
// Some boards answer non-browser user agents with an interstitial.
const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' };

const url = page => {
	const u = new URL(page, board);
	if (style) {
		u.searchParams.set('style', style);
	}
	return u.href;
};

const get = async page => {
	const res = await fetch(url(page), { headers });
	if (!res.ok) {
		throw new Error(`${url(page)}: HTTP ${res.status}`);
	}
	return res.text();
};

// Pick a forum and a topic the guest can see, so no board-specific ids are hard-coded.
// Categories and empty forums have no topics, so try forums until one does.
const ids = (html, script, param) => [...new Set([...html.matchAll(new RegExp(`${script}\\?(?:[^"]*?&amp;)?${param}=(\\d+)`, 'g'))].map(m => m[1]))];

const pages = { 'index.php': await get('index.php') };
for (const forum of ids(pages['index.php'], 'viewforum\\.php', 'f')) {
	const html = await get(`viewforum.php?f=${forum}`);
	const [topic] = ids(html, 'viewtopic\\.php', 't');
	if (topic) {
		pages[`viewforum.php?f=${forum}`] = html;
		pages[`viewtopic.php?t=${topic}`] = await get(`viewtopic.php?t=${topic}`);
		pages[`posting.php?mode=smilies&f=${forum}`] = await get(`posting.php?mode=smilies&f=${forum}`);
		break;
	}
}
for (const page of ['search.php', 'memberlist.php?mode=team', 'ucp.php?mode=login']) {
	pages[page] = await get(page);
}

const dir = mkdtempSync(join(tmpdir(), 'pbwow3-validate-'));
const files = {};
for (const [page, html] of Object.entries(pages)) {
	const file = join(dir, page.replace(/[^a-z0-9]+/gi, '_') + '.html');
	writeFileSync(file, html);
	files[`file:${file}`] = page;
}

const vnu = spawnSync('java', ['-jar', String(vnuJar), '--errors-only', '--format', 'json', ...Object.keys(files).map(f => f.slice(5))], { encoding: 'utf8' });
if (vnu.error || !vnu.stderr.trim().startsWith('{')) {
	console.error(vnu.error?.message ?? vnu.stderr);
	process.exit(2);
}

const messages = JSON.parse(vnu.stderr).messages;
for (const m of messages) {
	const page = files[m.url.replace(/^file:\/private/, 'file:')] ?? m.url;
	console.log(`${page}:${m.lastLine}  ${m.message}`);
}
console.log(`${messages.length} error(s) on ${Object.keys(pages).length} page(s)`);
process.exit(messages.length ? 1 : 0);
