jQuery(document).ready(function($) {
  $('#search-input').on('input', function() {
    let keyword = $(this).val();
    let category = $('#category-filter').val();

    if (keyword.length < 3) {
      $('#search-results').html('');
      return;
    }

    $.post(my_ajax_obj.ajax_url, {
      action: 'search_posts',
      keyword: keyword,
      category: category
    }, function(response) {
      if (response.success) {
        let output = '<ul class="search-list">';
        response.data.forEach(function(post) {
          output += `<li><a href="${post.link}">${post.title}</a></li>`;
        });
        output += '</ul>';
        $('#search-results').html(output);

        let $list = $('.search-list');
        $list.removeClass('active');
        setTimeout(() => {
          $list.addClass('active');
        }, 10);
      } else {
        $('#search-results').html('<ul class="search-list active"><li>Δεν βρέθηκαν άρθρα.</li></ul>');
      }
    });
  });

  function handleSearchRedirect() {
    let keyword = $('#search-input').val().trim();
    let category = $('#category-filter').val();
    let url = 'https://liontest.lncdoo.com/categories/';

    if (keyword.length >= 3) {
      url += '?keyword=' + encodeURIComponent(keyword);
      if (category) {
        url += '&category=' + encodeURIComponent(category);
      }
    } else if (category) {
      url += '?category=' + encodeURIComponent(category);
    }

    window.location.href = url;
  }

  // Enter key
  $('#search-input').on('keydown', function(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      handleSearchRedirect();
    }
  });

  // Click στο icon
  $('.search-icon').on('click', function(e) {
    e.preventDefault();
    handleSearchRedirect();
  });
});
