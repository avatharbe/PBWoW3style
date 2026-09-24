
## pbwow3_legion

World of Warcraft Legion themed style with Illidan video background and custom fonts.

Author @Sajaki

## requirements
- pbWoW 3.3.20 Base style

## Support
- https://www.avathar.be/forum/viewforum.php?f=82

## Changes
3.3.20 (24-09-2026)

- updated for phpBB 3.3.18

3.3.19 (30-04-2026)

- updated for phpBB 3.3.16

3.3.16 (22-02-2026)

- fixed hardcoded assets_version in prosilver stylesheet link
- removed unnecessary prosilver en/stylesheet.css
- removed tweaks.css IE conditional
- fixed logo stretch (background-size: contain)
- fixed responsive logo height
- added missing background images (towers.jpg, illidan.jpg)
- fixed background: attachment fixed, centered vertically
- commented out missing backgreen.jpg and bg-small.jpg references
- removed dead pbwow.com URL from header comment and stylesheet

3.3.15 (08-02-2026)

- updated for phpBB 3.3.15 (was 3.1.9)
- created overall_header.html with Twig syntax and correct CSS chain (prosilver > pbwow3 > legion + language CSS)
- body class now includes both pbwow3 and pbwow3_legion
- removed overall_footer.html (inherits from pbwow3 parent)
- converted videobg.html to Twig syntax

3.0.8 (29-08-2017)

- updated for phpBB 3.1.9

## Known issues
- videos/ directory is missing (illidan.mp4, illidan.webm) - video background will not display

### Copyright
© 2016 - Sajaki
