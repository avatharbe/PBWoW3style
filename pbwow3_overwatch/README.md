## pbwow3_Overwatch

Blizzard Overwatch 1 Style. Child of PBWoW3_Heroes.

Author @Paybas, @Sajaki

## requirements
- pbWoW and Heroes 3.3.20 Base style

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.20 (24-09-2026)

- updated for phpBB 3.3.18

3.3.19 (30-04-2026)

- updated for phpBB 3.3.16
- updated `ul.topiclist dfn` to the accessible visually-hidden pattern (1px clip rect) instead of the legacy `position:absolute; left:-999px` trick — matches prosilver 3.3.16
- search-result postprofile no longer renders embossed (dropped `text-shadow` for `.search .postprofile`)
- search-result postprofile fields are now white at 1em for readability (was `#666` greyish at 0.9em via prosilver cascade)
- forum blocks on the index page are now subtly transparent (`rgba(8, 16, 32, 0.10)` resting, `rgba(0, 0, 0, 0.15)` on hover) instead of fully opaque — lets the Overwatch background image breathe through
- recent topics sidebar rows match the same transparency as forum blocks for visual consistency

3.3.16 (22-02-2026)

- fixed hardcoded assets_version in prosilver stylesheet link
- removed unnecessary prosilver en/stylesheet.css
- removed tweaks.css IE conditional

3.3.15 (08-02-2026)

- updated for phpBB 3.3.15 (was 3.2.9)
- fixed style comment (was "Wildstar")
- updated WebFontLoader CDN URL
- removed overall_footer.html (inherits from pbwow3 parent)

3.2.9 (02-02-2020)

- initial release for phpBB 3.2.9
