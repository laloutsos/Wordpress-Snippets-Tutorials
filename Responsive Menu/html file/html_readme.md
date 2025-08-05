# 🍔 Hamburger Button & Navigation Menu HTML Explanation

This README breaks down the structure and purpose of the HTML used for the responsive hamburger button and the main navigation menu in a WordPress theme.

---

##  Hamburger Button

```html
<button type="button" class="primary-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
  <span class="label">Menu</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" aria-hidden="true">
    <path d="M0 0h31v4H0zM0 10h31v4H0zM0 20h31v4H0z" fill="currentColor"/>
  </svg>
</button>
```

### Breakdown:

* `<button>`

  * HTML button element used to toggle the visibility of the main menu (especially on mobile).
  * `type="button"`: Ensures it's a functional button, not a submit button.
  * `class="primary-menu-toggle"`: Used in CSS/JS to style and bind functionality.
  * `aria-label="Toggle menu"`: Provides an accessible label for screen readers.
  * `aria-expanded="false"`: Indicates the menu is currently collapsed (updated dynamically by JS).

* `<span class="label">Menu</span>`

  * Visible text label (optional). You can hide this with CSS if needed.

* `<svg>`

  * Inline SVG representing the hamburger icon (three horizontal bars).
  * `aria-hidden="true"`: Decorative; not needed by screen readers.
  * `<path>` draws the three lines with one SVG shape per line.
  * `fill="currentColor"`: Inherits current text color from CSS.

---

##  Navigation Markup

```html
<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'lioncode' ); ?>">
  <?php
  wp_nav_menu(
    array(
      'theme_location' => 'menu-1',
      'menu_id'        => 'primary-menu',
      'menu_class'     => 'primary-menu',
    )
  );
  ?>
</nav>
```

###  Breakdown:

* `<nav>`

  * Semantic HTML5 tag for navigation.
  * `id="site-navigation"`: Unique ID for styling or scripting.
  * `class="main-navigation"`: Used in your CSS and JavaScript.
  * `aria-label` with `esc_attr_e()` outputs the translated label "Primary Menu" for screen readers.

* `wp_nav_menu()`

  * WordPress function that renders a menu defined in the admin.
  * `theme_location`: Matches with `register_nav_menu()` in `functions.php`.
  * `menu_id`: ID of the `<ul>` generated (helps in styling/targeting it).
  * `menu_class`: Class given to the `<ul>` (in this case, `primary-menu`).

---

##  Combined Usage

* This button and `<nav>` element work in tandem:

  * The **hamburger button** toggles the visibility of the **primary navigation menu**.
  * The **JavaScript** listens for clicks on `.primary-menu-toggle` and toggles visibility by adding/removing CSS classes like `primary-menu-active`.

---

##  Notes

* Make sure this markup is inside the WordPress theme’s `header.php` or similar template.
* Responsive behavior and transitions (e.g., slide in/out) are controlled by CSS and JS.
* Ensure proper accessibility by updating `aria-expanded` via JavaScript when the menu opens/closes.

---
