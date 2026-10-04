
## pbwow3_heroes

Author @Paybas, @Sajaki

## requirements

- pbWow 3.3.22 Base style

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.22 (04-10-2026)

- replaced the legacy template syntax in overall_header.html and viewtopic_body.html (`DEFINE`, `eq` and `{L_...}`) with Twig `set`, `==` and `lang()`; renders as before (#41)
- removed empty CSS rules from content.css and extensions.css; nothing changes on screen (#40)
- fixed the UCP and MCP side menu on right-to-left boards: a leftover rule in bidi.css overrode the mirrored gradient and the hover highlight (#65)
- the `?v=` strings on the stylesheet imports now equal the style version, so browsers fetch the new CSS after an upgrade (#48)

3.3.20 (24-09-2026)

- updated for phpBB 3.3.18
- fixed missing contact icons: removed the `.contact-icon` override that pointed at a sprite this style does not ship, so prosilver's icons are used instead
- video background no longer blocks clicks on the footer links (`pointer-events: none` on `#video-background` and `#video-container`)

3.3.19 (30-04-2026)

- updated for phpBB 3.3.16
- ported null-safety on `U_NEWEST_POST` in viewforum_body.html (avoids broken anchors when URL is empty) — matches prosilver 3.3.16
- updated `ul.topiclist dfn` to the accessible visually-hidden pattern (1px clip rect) instead of the legacy `position:absolute; left:-999px` trick — matches prosilver 3.3.16

3.3.16 (22-02-2026)

- fixed hardcoded assets_version in prosilver stylesheet link
- removed unnecessary prosilver en/stylesheet.css
- removed tweaks.css IE conditional
- use T_THEME_PATH for bidi.css

3.3.15 (08-02-2026)

- updated for phpBB 3.3.15
- updated viewtopic (AJAX post display links, 2 new events)
- updated viewforum (autocomplete attributes)

3.3.5 (24-04-2022)

- updated for phpBB 3.3.5

3.3.0 (07-07-2020)

- updated for phpBB 3.3.0

3.2.10 (11-07-2020)

- support for S_PBWOW_SMALL_RANKS

3.2.9 (02-02-2020)

- updated from phpBB 3.2.2 to 3.2.9 (new events, css changes)

