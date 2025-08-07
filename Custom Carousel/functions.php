
// Enqueue styles & scripts
function lioncode_enqueue_scripts() {


	wp_enqueue_script( 'custom-carousel', get_template_directory_uri() . '/js/custom-carousel.js', array('swiper-js'), null, true );
	
}
add_action( 'wp_enqueue_scripts', 'lioncode_enqueue_scripts' );

