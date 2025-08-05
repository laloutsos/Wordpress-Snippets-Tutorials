


			<!-- Hamburger Button -->
			<button type="button" class="primary-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
			<span class="label">Menu</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" aria-hidden="true">
				<path d="M0 0h31v4H0zM0 10h31v4H0zM0 20h31v4H0z" fill="currentColor"/>
			</svg>
			</button>


			<!-- Navigation -->
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
			</nav><!-- #site-navigation -->

			