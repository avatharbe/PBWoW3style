## PBWoW 3 Style for phpBB 3.3.18

PBWoW 3 is a Blizzard-themed style for phpBB 3.3. It gives a board the look of a World of Warcraft–era community site: framed posts and portrait avatars, gaming-themed headers, and optional animated video backgrounds.

The style is built as a child of **prosilver**. It keeps phpBB's standard markup, template events and responsive layout, and it picks up prosilver fixes automatically.

This folder holds the **base style**. Twelve themed sub-styles in this repository build on it, so PBWoW3 must be installed before any of them.

- **Version:** 3.3.20 (24-09-2026)
- **Authors:** PayBas (2015) and @Sajaki (since 2017)
- **Live demo:** https://www.avathar.be/demoforum/app.php/guild

## Requirements
- phpBB 3.3.18 or higher
- pbwowExt (optional; enables the extras listed below)

## Features

**Always on**

- Blizzard-style framing for posts, the post profile, polls, the forum list and the navigation bar.
- Collapsible forum categories and statistics blocks. Each visitor's browser remembers which blocks are open or closed.
- Forum-list tooltips that show whether a forum has unread posts or links to another page.
- Localised search-button graphics for Czech, German, English, Spanish, French and Russian.
- Responsive layout for phones and small screens.
- Styling for quick reply and the Board3 portal.
- `theme/custom.css` for board-specific tweaks. It includes a few example post styles that you can reuse or remove.

**With pbwowExt installed and enabled**

- Animated video backgrounds, either on the index only or on every page. The sub-styles supply the videos.
- Game-icon frames around avatars.
- Small rank icons next to the avatar instead of the full rank block.
- The member's join date in the post profile.

Without pbwowExt, PBWoW3 works like a normal prosilver-based style and these extras stay off.

## Sub-styles

Each sub-style overrides only the header, colours, images, fonts and background video it needs, and inherits the rest from its parent:

| Sub-style | Parent |
|---|---|
| PBWoW3 Battlecry, PBWoW3_Diablo, PBWoW3_Garrison, PBWoW3_Heroes, PBWoW3_Legion, PBWoW3_Pandaria, PBWoW3_TBC, PBWoW3_Warlords, PBWoW3 Wotlk | PBWoW3 |
| PBWoW3_Overwatch, PBWoW3_WildStar | PBWoW3_Heroes |
| PBWoW3 Xmas | PBWoW3 Wotlk |

## Installation
1. Copy the `pbwow3` folder into your forum's `styles` folder.
2. To use a sub-style, also copy its folder and its parent's folder. See the table above.
3. In the Administration Control Panel (ACP), go to **Customise → Install Styles**. Install **PBWoW3** first, then any sub-styles.
4. Optional: install pbwowExt to enable video backgrounds, avatar frames and the other extras.

### Upgrading
1. Replace the style folders with the new versions.
2. Purge the board cache in the ACP.

Stylesheets are loaded with the style version in their URL, so browsers fetch the new CSS as soon as the version changes.

## Designer resources
The `contrib` folder contains a PSD with the PBWoW icons, a game-icon pack, and French versions of the quick-search graphics.

## Support
- https://www.avathar.be/forum/viewforum.php?f=82
- https://www.phpbb.com/customise/db/style/pbwow3/support

## Changes
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
- Restored the missing 'Mark read' link in the navigation bar.

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

## License

[GNU General Public License v2](http://opensource.org/licenses/gpl-2.0.php)
This style is open-source software released under the GPL.
We request that you retain the copyright notice.

## Credits
Created by PayBas; maintained by @Sajaki.
Thank you to @Galixte and @shadowfox for their support.
