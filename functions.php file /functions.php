function enqueue_scripts() {
	// Existing menu toggle script (depends on jquery)
	wp_enqueue_script(
		'menu-toggle',
		get_template_directory_uri() . '/js/menu-toggle.js',
		array('jquery'),
		null,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
