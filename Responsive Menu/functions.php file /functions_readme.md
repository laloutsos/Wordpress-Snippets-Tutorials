# Menu Toggle Script Integration

This README explains the purpose and functionality of the `menu-toggle.js` script used in this WordPress theme. This script is responsible for enabling responsive navigation menu behavior on mobile devices.

---

##  File Path

```
/js/menu-toggle.js
```

This JavaScript file is located inside the `js` directory of the active theme.

---

##  Enqueue Script in WordPress

The script is loaded using the `wp_enqueue_script()` function inside a custom function named `enqueue_scripts()`, which is hooked into `wp_enqueue_scripts`.

### PHP Code:

```php
function enqueue_scripts() {
	// Existing menu toggle script (depends on jQuery)
	wp_enqueue_script(
		'menu-toggle',
		get_template_directory_uri() . '/js/menu-toggle.js',
		array('jquery'), // jQuery dependency
		null,             // No specific version
		true              // Load in footer
	);
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
```

### What Each Parameter Does:

* `'menu-toggle'`: Handle name for the script.
* `get_template_directory_uri() . '/js/menu-toggle.js'`: Path to the script.
* `array('jquery')`: Ensures jQuery is loaded before this script.
* `null`: No version number specified.
* `true`: Loads the script just before `</body>`, improving performance.

---


