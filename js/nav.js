// Меняет цвет фона навбара при нажатии на бургер
document.addEventListener('DOMContentLoaded', function () {
  let navbar = document.querySelector('.custom-navbar');
  let toggler = document.querySelector('.navbar-toggler');

  toggler.addEventListener('click', function () {
    if (navbar.classList.contains('custom-bg')) {
      navbar.classList.remove('custom-bg');
    } else {
      navbar.classList.add('custom-bg');
    }
  });
});
// Меняет цвет фона навбара при скролле
document.addEventListener('DOMContentLoaded', function () {
  let navbar = document.querySelector('.custom-navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Установка активного класса на текущую страницу
  // let currentPath = window.location.pathname;
  // links.forEach(function (link) {
  //   if (link.getAttribute('href') === currentPath) {
  //     link.classList.add('active');
  //   }
  // });
});
