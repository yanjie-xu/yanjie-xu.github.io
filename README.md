# Yanjie Xu — minimal personal website

This package is a simplified replacement for the current GitHub Pages homepage.

## Design direction

The visual logic is inspired by the restraint of mol.org:
- large, clear typography
- generous whitespace
- very few visual elements
- one principal image
- no sliders, cards, tags, news feed, animation libraries, icons, or decorative effects
- one consistent visual language throughout

It is intentionally NOT a copy of Map of Life.

## IMPORTANT: keep the existing hero photo

The new homepage uses the photo that is already in your current repository:

    assets/images/hero/mushroom-hero.jpg

Because the photo already exists publicly in your current GitHub repository, this code package does not duplicate the image file.

When updating the site:
1. Keep the existing `assets/images/hero/mushroom-hero.jpg`.
2. Replace the old `index.html` with the new one.
3. Replace/add `assets/css/style.css`.
4. You can remove the old Jekyll sections, `_posts`, `_data`, news pages, and unused images later if you want an entirely clean repository.

## Corrected publication links

The previous website had three incorrect DOI links. They are corrected here:

- Slow-lived birds and bats carry higher pathogen loads
  https://doi.org/10.1016/j.oneear.2024.04.021

- Prioritizing global conservation of migratory birds over their migration network
  https://doi.org/10.1016/j.oneear.2023.08.017

- A network approach to prioritize conservation efforts for migratory birds
  https://doi.org/10.1111/cobi.13383

The other two selected-publication DOI links were also checked.

## Preview

For a quick local preview, place your existing `mushroom-hero.jpg` at the path above and open `index.html`.

For GitHub Pages, upload the files to the repository root. No build step and no Jekyll dependency are required.
