$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    //  tạo hai nút để điều khiển dừng lại và play slide
    // $('.play').on('click', function () {
    //   owl.trigger('play.owl.autoplay', [1000])
    // });
    // $('.stop').on('click', function () {
    //   owl.trigger('stop.owl.autoplay')
    // });
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      };
    });
    // let chieu_rong = $(window).width();
    //     if(chieu_rong < 768){
    //       $(window).scroll(function () {
    //         if ($(this).scrollTop()) {
    //           $('header').addClass('sticky');
    //         } else {
    //           $('header').removeClass('sticky');
    //         };
    //       });
    //     }
        
  });
 