## PBWoW 3 Style for phpBB 3.3.18

Authors: @Paybas and @Sajaki

## Requirements
- phpBB 3.3.18 or higher 
- pbwowExt (optional)

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.22 (04-10-2026)

- The custom header links from the pbWoW extension are no longer printed by the style itself. pbwowext 3.3.3 renders them through a template event, so update the extension together with this style, or the links disappear. (#35)
- Removed a leftover Recent Topics advertisement block from the bottom of the board index. Recent Topics renders its ad itself and limits it to the Side location; the style's copy only showed an ad in the top or bottom location, against that setting. (#36)
- Replaced the legacy template syntax left in pbwow3 and its sub-styles (`DEFINE`, `eq`/`neq` and `{L_...}`) with Twig `set`, `==`/`!=` and `lang()`. Pages render exactly as before. (#41)
- Removed three rules from `custom.css` that pointed at images the style does not ship: the `.red` post-profile backgrounds and the `.donate-button` styling. The donate button in the Recent Topics block is styled by the pbWoW extension, which ships its own image. (#45)
- Fixed the navigation bar writing two `class` attributes on pages without the search box. The second one was ignored, so the `no-search` styling never applied; the bar now shows its intended left corner there. (#43)
- Fixed the contact icons in the post profile dropdown (private message, email, website, ...), which showed up blank in pbwow3. (#44)
- Removed the empty `videobg.html` from pbwow3. The footer now includes it only when a sub-style provides one. In pbwow3_overwatch and pbwow3_wildstar the file stays, with a comment: it deliberately switches off the video they would otherwise inherit from pbwow3_heroes. (#46)
- Moved the style's JavaScript (collapsible boxes, anchor offset below the top bar, video background sizing and the mini-profile menus) from inline code in `overall_footer.html` into `template/pbwow3.js`, so browsers can cache it. Nothing changes in how it behaves. (#47)

3.3.21 (28-09-2026)

- Fixed the breadcrumb structured data, which Google Search Console reported as invalid. Breadcrumb links no longer declare their own schema.org item, so each crumb now supplies its own URL and the breadcrumbs are eligible for rich results again. (#33)

3.3.20 (24-09-2026)

- Updated for phpBB 3.3.18. The style automatically uses prosilver's updated OAuth login template and new moderation template event; no template overrides were needed.
- Fixed missing contact icons in pbwow3_heroes, pbwow3_overwatch and pbwow3_wildstar.
- All styles now use prosilver's contact icons instead of keeping separate copies. This includes the new X logo in phpBB 3.3.18 and ensures future icon updates appear automatically.
- Prevented the video background layer from blocking clicks on footer links. This adds protection alongside the fix in pbwowExt 3.3.2 and covers both pbwow3 and pbwow3_heroes.

3.3.19 (30-04-2026)

- Updated for phpBB 3.3.16. (#28)

3.3.18 (30-04-2026)

- Fixed the search results layout in pbwow3, pbwow3_heroes and pbwow3_overwatch. Author details now appear beside the post text, with the search results link on a separate row below. (#27)
- Left-aligned author details in search results.
- Removed unused rules for the width of author details in those three styles.
- Simplified stylesheet caching in those three styles. Updating the style version now makes browsers reload all imported stylesheets, without having to update a separate identifier for each file.

3.3.17 (01-03-2026)

- Restored the empty videobg.html template. Its absence caused a template-loading error when video backgrounds were enabled in pbwowExt.

3.3.16 (22-02-2026)

- Fixed the prosilver stylesheet link so it uses the current asset version instead of a fixed value.
- Removed an unnecessary reference to prosilver's English stylesheet.
- Used phpBB's language stylesheet setting to load the correct stylesheet.
- Used the theme path setting to locate bidi.css, the stylesheet for right-to-left languages.
- Removed an Internet Explorer rule that tried to load the missing tweaks.css file.
- Removed the empty videobg.html template.
- Removed unused upload images.
- Updated the webfont URL in simple_header.html.

3.3.15 (08-02-2026)

- Updated for phpBB 3.3.15.
- Updated post display links to use phpBB's AJAX behaviour.
- Added template events before post content and after the online-user list, allowing extensions to add content in those locations.
- Updated forum-list tooltips to recognise forums that link to another page.
- Updated the backup copy of jQuery to version 3.7.1.
- Updated login forms to help browsers autofill the correct fields.
- Simplified the check used to sort search results.
- Updated the Internet Explorer condition to target IE 9.

3.3.5 (24-04-2022)

- Updated for phpBB 3.3.5.
- Added the pbwow3_diablo style.

3.3.2 (29-05-2021)

- Updated for phpBB 3.3.4.

3.3.1 (17-10-2020)

- Updated for phpBB 3.3.1.

3.3.0 (07-07-2020)

- Updated for phpBB 3.3.0.

3.2.11 (29-05-2021)

- Updated for phpBB 3.2.10.

3.2.10 (07-07-2020)

- Added support for small rank images through S_PBWOW_SMALL_RANKS.

3.2.9 (02-02-2020)

- Updated for phpBB 3.2.9.

3.2.8 (20-10-2019)

- Updated for phpBB 3.2.8 (added template events).

3.2.7 (04-06-2019)

- Updated for phpBB 3.2.7 (added template events).

3.2.2 (16-03-2018)

- Updated for phpBB 3.2.2 (updated HTML and added template events).
- Restored the missing ‘Mark read’ link in the navigation bar.

3.2.1.6 (15-10-2017)

- Fixed the appearance of contact icons.
- Fixed topic icon sizes.
- Removed duplicate arrows.

3.2.1.5 (12-10-2017)

- Fixed an issue with the fixed background. (#16)

3.2.1.4 (11-10-2017)

- Moved some CSS rules to the pbwow extension.
- Fixed the poll layout.
- Fixed the private message layout.
- Converted templates to Twig syntax.

3.2.1.3 (08-10-2017)

- Fixed avatar display on smaller screens.

3.2.1.2 (28-09-2017)

- Various fixes.

3.2.1.1 (09-09-2017)

- Fixed the layout on smaller screens.

3.2.1 (28-08-2017)

- Updated for phpBB 3.2.1.

3.2.0 (29-08-2017)

- Updated for phpBB 3.2.0.
 
3.1.10 (15-12-2016)

- Updated for phpBB 3.1.10.

3.0.8.3

- Removed unnecessary CSS rules for recent items.

3.0.8.2 (19-6-2016)

- Updated for phpBB 3.1.9.
- Updated for Recent Topics 2.1.
- Fixed avatar positioning.

3.0.7 (28-2-2016)

- Updated for phpBB 3.1.8.

3.0.6 (28-2-2016)

- Updated for phpBB 3.1.7.

3.0.5 (28-2-2016)

- Updated for phpBB 3.1.6.
- Added theme images for the pbWoW Core Theme.
- Fixed avatar positioning.

## Installation
1. Copy the pbwow3 folder into your forum’s styles folder.
2. Open the Administration Control Panel (ACP), go to Customise → Install Styles, and click Install.

## License

[GNU General Public License v2](http://opensource.org/licenses/gpl-2.0.php)
This style is open-source software released under the GPL.
We request that you retain the copyright notice below.

## Credits 
Thank you to @Galixte and @shadowfox for their support.
