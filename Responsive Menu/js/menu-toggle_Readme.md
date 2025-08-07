**jQuery Menu Script**

1. **Add dropdown icon**

   * Finds all menu items that have children.
   * Appends a small arrow icon (`▼`) next to them.

2. **Main menu toggle**

   * When the hamburger button is clicked, it toggles a class (`primary-menu-active`) on the `<body>`.
   * This class opens/closes the mobile menu with CSS.

3. **Submenu toggle**

   * When the arrow icon is clicked, it expands/collapses the submenu.
   * Uses `slideToggle()` for animation.

4. **Close menu when clicking outside**

   * If user clicks outside of the menu or toggle button, the menu and any open submenus close automatically.

It’s all handled with simple jQuery events and classes. Clean and mobile-friendly.
