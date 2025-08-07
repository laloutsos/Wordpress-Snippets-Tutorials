

// Enqueue styles & scripts
function lioncode_enqueue_scripts() {
	wp_enqueue_script( 'search-posts-js', get_template_directory_uri() . '/js/search-posts.js', array('jquery'), '1.0', true );


	wp_localize_script( 'search-posts-js', 'my_ajax_obj', array(
		'ajax_url' => admin_url( 'admin-ajax.php' ),
		'search_results_url' => site_url('/search-results/')
	));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'lioncode_enqueue_scripts' );
