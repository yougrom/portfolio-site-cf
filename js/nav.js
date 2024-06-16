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

// Эффект бегущей строки или напечатанные строки
// document.addEventListener('DOMContentLoaded', function () {
//   var lines = [
//     document.getElementById('line1'),
//     document.getElementById('line2'),
//     document.getElementById('line3'),
//   ];

//   lines.forEach(function (line) {
//     line.dataset.text = line.innerHTML;
//     line.innerHTML = '';
//   });

//   var currentLine = 0;
//   var i = 0;

//   function typeWriter() {
//     if (currentLine < lines.length) {
//       var text = lines[currentLine].dataset.text;
//       if (i < text.length) {
//         lines[currentLine].innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100); // Adjust typing speed here
//       } else {
//         lines[currentLine].style.borderRight = 'none'; // Remove cursor after line is done
//         currentLine++;
//         i = 0;
//         if (currentLine < lines.length) {
//           setTimeout(typeWriter, 100); // Start typing next line
//         }
//       }
//     }
//   }

//   typeWriter();
// });
