# jQuery Menu Script Explanation

This README explains in detail the purpose and function of a jQuery script used for toggling the responsive navigation menu with submenus in a WordPress (or similar) environment.

##  jQuery Wrapper

```js
jQuery(function($) {
```

* Standard jQuery document ready block.
* Ensures the code inside runs after the DOM is fully loaded.
* The `$` symbol is an alias for `jQuery`, passed in to avoid conflicts.

---

##  Add Submenu Toggle Buttons

```js
$('.primary-menu li.menu-item-has-children').each(function() {
  if (!$(this).children('.submenu-toggle').length) {
    $(this).append('<span class="submenu-toggle" aria-hidden="true">&#x25BC;</span>');
  }
});
```

* Selects all `<li>` items in `.primary-menu` that have the class `menu-item-has-children`.
* For each of those items, it checks if a `.submenu-toggle` element exists.
* If not, it appends a `<span>` element with a downward arrow (▼) to indicate a toggle.
* `aria-hidden="true"` makes the icon hidden from screen readers.

---

##  Toggle Main Menu (Hamburger Button)

```js
$(document).on('click', '.primary-menu-toggle', function(e) {
  e.preventDefault();
  $('body').toggleClass('primary-menu-active');
});
```

* Adds a click event listener to the main menu toggle button (e.g., hamburger icon).
* Prevents default link behavior.
* Toggles the class `.primary-menu-active` on the `<body>`, which is usually styled in CSS to show/hide the menu.

---

##  Toggle Submenus (Mobile)

```js
$(document).on('click', '.submenu-toggle', function(e) {
  e.preventDefault();
  var $parent = $(this).closest('li.menu-item-has-children');
  $parent.toggleClass('submenu-open');
  $parent.children('ul.sub-menu').slideToggle(200);
});
```

* When a `.submenu-toggle` (▼ arrow) is clicked:

  * Prevents default behavior.
  * Finds the closest parent `<li>` with submenu.
  * Toggles `.submenu-open` class (used for styling).
  * Shows/hides the corresponding `ul.sub-menu` with a sliding animation.

---

##  Close Menu When Clicking Outside (Optional)

```js
$(document).on('click', function(e) {
  var container = $(".primary-menu, .primary-menu-toggle");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('primary-menu-active')) {
      $('body').removeClass('primary-menu-active');
      $('.primary-menu li.menu-item-has-children.submenu-open')
        .removeClass('submenu-open')
        .children('ul.sub-menu')
        .slideUp(200);
    }
  }
});
```

* Listens for any click on the document.
* If the click was NOT inside the menu or the toggle button:

  * Checks if the main menu is currently open (`.primary-menu-active` is on `<body>`).
  * Removes that class to close the menu.
  * Also closes all open submenus by removing `.submenu-open` and sliding up the submenu items.

---

##  Summary

*  Adds visual toggle indicators to items with submenus.
*  Toggles the main menu open/closed.
*  Toggles submenus with smooth animations.
*  Optionally closes everything if user clicks outside the menu area.

This setup is responsive, accessible, and optimized for WordPress menus with nested submenu structures. It allows for both desktop and mobile interactions in a clean and user-friendly way.

---
