var headerNav = document.getElementById("hNav-id");
var mobileMenu = document.getElementById("mobile-menu");
var popupBg = document.querySelector('.popup__bg'); // Фон попап окна
var popup = document.querySelector('.popup'); // Само окно
var openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
var closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

mobileMenu.addEventListener("click", function(locwww){
    locwww.preventDefault();
    headerNav.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
 
//   });
// });

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});