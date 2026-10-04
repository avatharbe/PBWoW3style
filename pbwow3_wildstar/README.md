
## pbwow3_wildstar

wildstar was a mmo that closed down in 2018. 
https://en.wikipedia.org/wiki/WildStar_(video_game)

Author @Paybas, @Sajaki

## requirements
- pbWow and Heroes 3.3.22 Base style

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.22 (04-10-2026)

- replaced the legacy `eq` comparison in overall_header.html with Twig `==`; renders as before (#41)
- removed empty CSS rules from extensions.css; nothing changes on screen (#40)
- fixed the UCP and MCP side menu on right-to-left boards: a leftover rule in pbwow3_heroes's bidi.css overrode the mirrored gradient and the hover highlight (#65)

3.3.20 (24-09-2026)

- updated for phpBB 3.3.18
- fixed missing contact icons: removed the `.contact-icon` override that pointed at a sprite this style does not ship, so prosilver's icons are used instead

3.3.19 (30-04-2026)

- updated for phpBB 3.3.16

3.3.16 (22-02-2026)

- fixed hardcoded assets_version in prosilver stylesheet link
- removed unnecessary prosilver en/stylesheet.css
- removed tweaks.css IE conditional

3.3.15 (08-02-2026)

- updated for phpBB 3.3.15

3.3.5 (24-04-2022)

- updated for phpBB 3.3.5

3.2.9 (02-02-2020)

- updated from phpBB 3.1.9 to 3.2.9