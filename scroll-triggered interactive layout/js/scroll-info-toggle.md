# scroll-observer-info-boxes

This JavaScript script links `.scroll-section` elements with `.info-box` components and highlights the correct info box as the user scrolls down the page.

## What it does

- Waits for the page to fully load (`DOMContentLoaded`).
- Uses the `IntersectionObserver` API to track which `.scroll-section` is currently visible on screen.
- Each `.info-box` has a `data-related` attribute (e.g. `data-related="section-1"`).
- When a section becomes visible (40% into view), the matching `.info-box` gets an `.expanded` class.
- All other info boxes collapse (the class is removed).

## Example

If a section has `id="section-2"`, and an info box has `data-related="section-2"`, that box will expand when the section scrolls into view.

