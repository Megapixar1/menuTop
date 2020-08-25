$(function() {
   menu_top = $('.menu').offset().top;        // запоминаем положение меню
   $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
     if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
       if ($('.menu').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
         $('.menu').css('position','fixed');  // задаем блоку меню свойство position = fixed
         $('.menu').css('top','0');           // положение в самом верху
         $('.content').css('margin-top','80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
       }
     } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
       if ($('.menu').css('position') == 'fixed') {  // если меню зафиксировано
         $('.menu').css('position','');
         $('.menu').css('top','');
         $('.content').css('margin-top','');
       }
     }
   });
 });


//  .menu {
//    width: 100%;
//    height: 80px;
//    background: #b5ff90;
//    z-index: 10;
//  }