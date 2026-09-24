## PBWoW 3 Style for phpBB 3.3.18

Author @Paybas, @Sajaki

## requirements
- phpBB 3.3.18 or higher
- pbwowExt (optional)

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.20 (24-09-2026)
- updated for phpBB 3.3.18 prosilver — both the 3.3.17 `login_body_oauth.html` fix and the 3.3.18 `mcp_topic_postrow_post_after` event are inherited, as pbwow3 overrides neither template
- fix: contact icons were broken in pbwow3_heroes, pbwow3_overwatch and pbwow3_wildstar — each declared `.contact-icon { background-image: url("./images/icons/icons_contact.png"); }` without shipping that file, so the sprite returned 404
- removed pbwow3's duplicate `icons_contact.png` (pixel-identical to prosilver's, only re-encoded) together with all four redundant `.contact-icon` overrides; every style now uses prosilver's sprite and prosilver's positions, so the 3.3.18 `.phpbb_twitter-icon` shift and any future prosilver sprite change are picked up automatically
- added `pointer-events: none` to `#video-background` as defence in depth against the pbwowext click-shield that made static footers unclickable (fixed upstream in pbwowext 3.3.2); placed in pbwow3/theme/extensions.css and pbwow3_heroes/theme/custom.css so both CSS chains are covered

3.3.19 (30-04-2026)
- updated for phpBB 3.3.16 prosilver (#28)

3.3.18 (30-04-2026)
- fix: search results no longer stack — switched `.search.post > .inner` to flex layout so postprofile (23.5%) and postbody sit side-by-side reliably; the searchresults link wraps to its own row below (#27)
- fix: postprofile in search results is now left-aligned (was inheriting `text-align: center` from the general `.postprofile` rule)
- removed stale `.search .postprofile { width: 30% }` rule in content.css of pbwow3, pbwow3_heroes and pbwow3_overwatch (forms.css's 23.5% always won by source order — dead code)
- same flex search-layout fix applied to pbwow3_heroes and pbwow3_overwatch (which carry their own forms.css overrides)
- replaced per-file `?hash=...` query strings on `@import` rules with a shared `?v={style_version}` stamp in pbwow3, pbwow3_heroes, and pbwow3_overwatch — one version bump now invalidates all imported CSS files at once, no more per-file hash bookkeeping

3.3.17 (01-03-2026)
- fix: restore empty videobg.html placeholder, fixing Twig LoaderError crash when video backgrounds are enabled in pbwowExt

3.3.16 (22-02-2026)
- fixed hardcoded assets_version in prosilver stylesheet link
- removed unnecessary prosilver en/stylesheet.css
- use T_STYLESHEET_LANG_LINK for language stylesheet
- use T_THEME_PATH for bidi.css
- removed tweaks.css IE conditional (file does not exist)
- removed empty videobg.html
- removed unused plupload images
- updated webfont URL in simple_header.html

3.3.15 (08-02-2026)
- updated for phpBB 3.3.15
- updated post display links to use AJAX anchors (viewtopic)
- added viewtopic_body_postrow_content_before event
- added viewtopic_body_online_list_after event
- added forum link type detection in forumlist tooltips
- updated jQuery fallback to 3.7.1
- updated autocomplete attributes on login forms
- simplified search results sort condition
- updated IE conditional to IE 9

3.3.5 (24-04-2022)
- updated for phpBB 3.3.5
- added pbwow3_diablo

3.3.2 (29-05-2021)
- updated for phpBB 3.3.4

3.3.1 (17-10-2020)
- updated for phpBB 3.3.1

3.3.0 (07-07-2020)
- updated for phpBB 3.3.0

3.2.11 (29-05-2021)
- updated for phpBB 3.2.10

3.2.10 (07-07-2020)
- support for S_PBWOW_SMALL_RANKS

3.2.9 (02-02-2020)
- updated for phpBB 3.2.9

3.2.8 (20-10-2019)
- updated for phpBB 3.2.8 (new events)

3.2.7 (04-06-2019)
- updated for phpBB 3.2.7 (new events)

3.2.2 (16-03-2018)
- updated for phpBB 3.2.2 (markup changes and new events)
- fixed missing 'mark read' link in navbar

3.2.1.6 (15-10-2017)
- fix contact icon appearance
- fix topic icon size
- fix duplicate arrows

3.2.1.5 (12-10-2017)
- fix #16 "fixed" background 

3.2.1.4 (11-10-2017)
- moved some css to pbwow extension
- fixed poll view
- fixed pm view
- converted to twig syntax

3.2.1.3 (08-10-2017)
- fixed avatar in responsive view

3.2.1.2 (28-09-2017)
- many more fixes

3.2.1.1 (09-09-2017)
- Fix for Responsive view

3.2.1 (28-08-2017)
- updated for phpbb 3.2.1

3.2.0 (29-08-2017)
- updated for phpbb 3.2.0
 
3.1.10 (15-12-2016)
- updated for phpbb 3.1.10

3.0.8.3
- remove redundant recent items css

3.0.8.2 (19-6-2016)
- updated for phpbb 3.1.9
- updated for recent topics 2.1
- fix avatar offset

3.0.7 (28-2-2016)
- updated for phpbb 3.1.8

3.0.6 (28-2-2016)
- updated for phpbb 3.1.7

3.0.5 (28-2-2016)
- updated for phpbb 3.1.6
- added theme images for pbWoW (only the Core Theme)
- fixed placement of avatar

## Use
- Copy pbwow3 folder to styles
- go to ACP -> Customise -> Install Styles and click the Install link. 

## License

[GNU General Public License v2](http://opensource.org/licenses/gpl-2.0.php)
This application is opensource software released under the GPL.
We request that you retain the copyright notice below.

## Credits 
Thank you to @Galixte, @shadowfox for supporting
