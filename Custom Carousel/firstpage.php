
  <!-- News Carousel Section -->
  <div class="custom-news-carousel swiper">
    <div class="swiper-wrapper">
      <?php
      $args = array(
        'post_type' => 'post',
        'posts_per_page' => 6,
        'category_name' => '', 
      );
      $query = new WP_Query($args);
      if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
          $categories = get_the_category();
          $category_name = !empty($categories) ? esc_html($categories[0]->name) : '';
          $category_slug = !empty($categories) ? esc_html($categories[0]->slug) : '';
      ?>
          <div class="swiper-slide">
            <div class="carousel-card">
              <div class="thumb"><?php the_post_thumbnail('medium'); ?></div>
              <div class="car-content">
                <span class="carousel-category <?php echo $category_slug; ?>">
                  <?php echo $category_name; ?>
                </span>
                <a href="<?php the_permalink(); ?>">
                  <h3 class="carousel-title"><?php the_title(); ?></h3>
                  <span class="carousel-more">Μάθετε περισσότερα →</span>
                </a>
              </div>
            </div>
          </div>
      <?php
        endwhile;
        wp_reset_postdata();
      endif;
      ?>
    </div>
    <div class="swiper-button-prev"><i class="fas fa-arrow-left"></i></div>
    <div class="swiper-button-next"><i class="fas fa-arrow-right"></i></div>
    <div class="swiper-pagination"></div>
  </div>

  