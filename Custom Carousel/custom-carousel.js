document.addEventListener('DOMContentLoaded', function () {
  let slidesPerViewValue = 2.5;
  let paginationConfig = {
    el: '.swiper-pagination',
    type: 'progressbar',
  };

  if (document.body.classList.contains('page-id-338')) {
    slidesPerViewValue = 3.5;
    paginationConfig = false;
  }

  const swiper = new Swiper('.custom-news-carousel', {
    slidesPerView: slidesPerViewValue,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: paginationConfig,
  });
});
