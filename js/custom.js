(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 0) {
            $('.cre_header_part').addClass('menu_fixed animated slideInDown');
        } else {
            $('.cre_header_part').removeClass('menu_fixed animated slideInDown');
        }
    });


   //swiper slider
    var swiper = new Swiper(".banner-swiper", {
        spaceBetween: 30,
        loop: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    var swiper = new Swiper(".partners-sw", {
        spaceBetween: 10,
        slidesPerView: 7,
        loop: "true",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
            // when window width is >= 320px
            480: {
                slidesPerView: 2,
                spaceBetween: 10
              },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
            576: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              // when window width is >= 480px
              992: {
                slidesPerView: 5,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 10
              },
              1441: {
                slidesPerView: 7,
                spaceBetween: 10
              }
          },
        
      });
    var swiper = new Swiper(".service-sw", {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: "true",
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            }
            
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });

    

    //top scroll
    var cre_top_scroll = $('.top-scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            cre_top_scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

}(jQuery));