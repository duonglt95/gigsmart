jQuery(document).ready(function ($) {
     $(window).on('resize', function (event) {
          var width = $(document).width();
          if (width > 767) {
               $('.nav-desktop').css('height', 'auto');
          } else if (width < 768) {
               $('.nav-desktop').css('height', '0');
          }
     });
     if (window.matchMedia('(max-width: 767px)').matches) {
          $('.nav-desktop').css('height', '0');
     } else {
          $('.nav-desktop').css('height', 'auto');
     }
     // nav header
     $('.nav .nav-link').on('click', function () {
          $('.nav').find('.active').removeClass('active');

          if (!$(this).hasClass('btn-signup') && !$(this).parents('.nav-list1-line').length) {
               $(this).addClass('active');
          }
     });

     // Home page tab business
     $('.business button:not(:first)').addClass('inactive');
     $('.tab-content').hide();
     $('.tab-content:first').show();
     $('.tab-img').hide();
     $('.tab-img:first').show();
     $('.business .btn').on('click', function () {
          var t = $(this).attr('id');

          if ($(this).hasClass('inactive')) {
               //this is the start of our condition
               $('.business button').addClass('inactive');
               $('.business button').addClass('btn-line--blue');
               $('.business button').removeClass('btn-fill--blue');

               $(this).removeClass('btn-line--blue');
               $(this).removeClass('inactive');
               $(this).addClass('btn-fill--blue');
               $('.tab-content').hide();
               $('.tab-img').hide();
               $('#i-' + t).fadeIn('slow');
               $('#c-' + t).fadeIn('slow');
          }
     });
     // $('.business .btn').on('click', function () {
     //      var idtab = $(this).attr('id');
     //      $(this).removeClass('btn-line-blue');
     //      $(this).addClass('btn-fill--blue');
     //      if (idtab == 'btntab1') {
     //           $('.tab1-content').removeClass('d-none');
     //           $('.tab1-content').addClass('d-block');
     //           $('.tab2-content').addClass('d-none');
     //           $('.tab2-content').remove('d-block');

     //           $('#btntab2').removeClass('btn-fill--blue');
     //           $('#btntab2').addClass('btn-line--blue');
     //      } else if (idtab == 'btntab2') {
     //           $('.tab1-content').remove('d-block');
     //           $('.tab1-content').addClass('d-none');
     //           $('.tab2-content').removeClass('d-none');
     //           $('.tab2-content').addClass('d-block');

     //           $('#btntab1').removeClass('btn-fill--blue');
     //           $('#btntab1').addClass('btn-line--blue');
     //      }
     // });
     // Hire worker page tab
     $('.staff-btn button:not(:first)').addClass('inactive');
     $('.tab-content').hide();
     $('.tab-content:first').show();

     $('.staff-btn button').click(function () {
          var t = $(this).attr('id');

          if ($(this).hasClass('inactive')) {
               //this is the start of our condition
               $('.staff-btn button').addClass('inactive');
               $('.staff-btn button').addClass('btn-line--blue');
               $('.staff-btn button').removeClass('btn-fill--blue');

               $(this).removeClass('btn-line--blue');
               $(this).removeClass('inactive');
               $(this).addClass('btn-fill--blue');
               $('.tab-content').hide();
               $('#' + t + '--content').fadeIn('slow');
          }
     });
     // Check when scroll visible
     function checkVisible(elm, eval) {
          eval = eval || 'visible';
          var vpH = $(window).height(), // Viewport Height
               st = $(window).scrollTop(), // Scroll Top
               y = $(elm).offset().top,
               elementHeight = $(elm).height();

          if (eval == 'visible') return y < vpH + st && y > st - elementHeight;
          if (eval == 'above') return y < vpH + st;
     }
     // count up
     $(window).scroll(function () {
          if (checkVisible($('.count'))) {
               $(window).off('scroll');
               $('.count').each(function () {
                    $(this)
                         .prop('Counter', 0)
                         .animate(
                              {
                                   Counter: $(this).text(),
                              },
                              {
                                   duration: 1000,
                                   easing: 'swing',
                                   step: function (now) {
                                        now = Number(Math.ceil(now)).toLocaleString('en');
                                        $(this).text(now);
                                   },
                              }
                         );
               });
          } else {
               // silent is perfect
          }
     });

     // menu mobile
     $('#btn-mobile').click(function () {
          if ($(this).siblings('.nav-desktop').height() == 0) {
               // $(this).siblings('.nav-desktop').css('max-height', 'auto');
               // $('.nav-desktop').addClass('mb-show');
               $('.nav-desktop').animate(
                    {
                         height: $('.nav-desktop').get(0).scrollHeight,
                    },
                    400,
                    function () {
                         $(this).height('auto');
                    }
               );
          } else {
               $('.nav-desktop').animate(
                    {
                         height: 0,
                    },
                    400,
                    function () {
                         $(this).height('0');
                    }
               );
               // $('.nav-desktop').removeClass('mb-show');
          }
     });
});
