document.addEventListener('DOMContentLoaded', () => {
  const infoBoxes = document.querySelectorAll('.info-box');
  const sections = document.querySelectorAll('.scroll-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        infoBoxes.forEach(box => {
          if (box.dataset.related === id) {
            box.classList.add('expanded');
          } else {
            box.classList.remove('expanded');
          }
        });
      }
    });
  }, {
    root: null,
    threshold: 0.4
  });

  sections.forEach(section => observer.observe(section));
});
