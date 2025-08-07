jQuery(function($) {
  $('.primary-menu li.menu-item-has-children').each(function() {
    if (!$(this).children('.submenu-toggle').length) {
      $(this).append('<span class="submenu-toggle" aria-hidden="true">&#x25BC;</span>');
    }
  });

  // Toggle main menu
  $(document).on('click', '.primary-menu-toggle', function(e) {
    e.preventDefault();
    $('body').toggleClass('primary-menu-active');
  });

  // Toggle submenu on mobile
  $(document).on('click', '.submenu-toggle', function(e) {
    e.preventDefault();
    var $parent = $(this).closest('li.menu-item-has-children');
    $parent.toggleClass('submenu-open');
    $parent.children('ul.sub-menu').slideToggle(200);
  });

  // Click outside menu to close (optional)
  $(document).on('click', function(e) {
    var container = $(".primary-menu, .primary-menu-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('primary-menu-active')) {
        $('body').removeClass('primary-menu-active');
        $('.primary-menu li.menu-item-has-children.submenu-open').removeClass('submenu-open').children('ul.sub-menu').slideUp(200);
      }
    }
  });
}); 