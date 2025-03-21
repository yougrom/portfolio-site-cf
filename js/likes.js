// Получаем все кнопки лайков
let hearts = document.querySelectorAll('.heart');

hearts.forEach(function (heart) {
  heart.onclick = function () {
    // Находим конкретный элемент likes-number именно у этой кнопки
    let likesNumber = heart.querySelector('.likes-number');

    if (heart.classList.contains('added')) {
      likesNumber.textContent--;
    } else {
      likesNumber.textContent++;
    }

    heart.classList.toggle('added');
  };
});
