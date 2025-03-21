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

const firebaseConfig = {
  apiKey: 'AIzaSyA9ObwmlJEsSvsH0_kQBM8z_abGIprLJr8',
  authDomain: 'gromchat-a2482.firebaseapp.com',
  databaseURL:
    'https://gromchat-a2482-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'gromchat-a2482',
  storageBucket: 'gromchat-a2482.appspot.com',
  messagingSenderId: '397594996637',
  appId: '1:397594996637:web:cde498dd429a737359c974',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.querySelectorAll('.heart').forEach((heart, index) => {
  let likesNumber = heart.querySelector('.likes-number');

  // Получаем лайки из Firebase
  db.ref('likes/' + index).on('value', (snapshot) => {
    likesNumber.textContent = snapshot.val() || 0;
  });

  heart.onclick = function () {
    let ref = db.ref('likes/' + index);
    ref.transaction((likes) => {
      return heart.classList.contains('added')
        ? (likes || 0) - 1
        : (likes || 0) + 1;
    });

    heart.classList.toggle('added');
  };
});
