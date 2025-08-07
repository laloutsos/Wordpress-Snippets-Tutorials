# scroll-linked-sections-wp

This is a custom WordPress layout with scroll-linked sections and info boxes.

## What it does

- On the left side: you scroll through different content sections (posts grouped by category).
- On the right side: there are info boxes.
- As you scroll down the page, the matching info box highlights automatically.
- This is done using JavaScript (Intersection Observer) and a simple `data-related` system.

## How it works

1. Each `.scroll-section` has an `id` (like `section-1`, `section-2`, etc).
2. Each `.info-box` has a `data-related` attribute that matches the section id.
3. When a section is visible on screen, the related info box gets the class `.expanded`.

