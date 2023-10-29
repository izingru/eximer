(function ($) {
  $(function () {

    /* selet header */
    $('.js-ag-city_current').on('click', function (e) {
      e.preventDefault();

      $(this).parent('.js-ag-city_box').toggleClass('js-ag-city_box__active');
    });

    $('.js-ag-phone_current').on('click', function (e) {
      e.preventDefault();

      $(this).parent('.js-ag-phone_box').toggleClass('js-ag-phone_box__active');
    });

    $('.js-ag-lang_current').on('click', function (e) {
      e.preventDefault();

      $(this).parent('.js-ag-lang_box').toggleClass('js-ag-lang_box__active');
    });
    /* /selet header */

    /* nav menu */
    $('#js-menu_btn').on('click', function (e) {
      e.preventDefault();

      agMenuOpen();
    });

    $('#js-menu-close_btn').on('click', function (e) {
      e.preventDefault();

      agMenuClose();
    });

    function agMenuOpen() {
      var agBody = $('body');

      $('#js-menu_nav').addClass('js-ag-menu_nav__open');

      agBody.addClass('js-ag-menu_overlay');
    }

    function agMenuClose() {
      var agBody = $('body');

      $('#js-menu_nav').removeClass('js-ag-menu_nav__open');

      agBody.removeClass('js-ag-menu_overlay');
    }

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('#js-menu_nav').is(':visible')) {
        agMenuClose();
      }
    });

    $(document).mouseup(function (e) {
      var agMenuNav = $('#js-menu_nav');

      if ((!agMenuNav.is(e.target) && agMenuNav.has(e.target).length === 0)) {
        agMenuClose();
      }
    });
    /* /nav menu */

    /* categories */
    var agCatTitle = $('.js-menu-nav_link');

    agCatTitle.on('click', function (e) {
      e.preventDefault();

      var agCatText = $(this).parent('.js-menu-nav_item').children('.js-ag-subcat-nav_list');

      if (agCatText.css('display') == 'none') {
        agCatText.slideDown();

        $(this).parent('.js-menu-nav_item').addClass('js-ag-menu-nav_has-subcat__open');
      }else{
        agCatText.slideUp();

        $(this).parent('.js-menu-nav_item').removeClass('js-ag-menu-nav_has-subcat__open');
      }
    });
    /* /categories */

    /* scroll to form */
    $('.js-scroll_btn').click(function (e) {
      e.preventDefault();

      var agAnchor = $('.js-scroll_form').offset().top;

      $('body, html').animate({scrollTop: agAnchor}, 500);
    });
    /* /scroll to form */

    /* counter */
    if ($('.js-counter').length) {
      $(window).on('scroll', function () {
        var agTarget = $('.js-counter'),
          agTargetPos = agTarget.offset().top - 100,
          agWinHeight = $(window).height(),
          agScrollToElem = agTargetPos - agWinHeight,
          agWinScrollTop = $(this).scrollTop();

        if (agWinScrollTop > agScrollToElem) {
          $('#first-number').animate({num: 24 - 1}, {
            duration: 4000, step: function (num) {
              this.innerHTML = Math.floor(num + 1);
            }
          });

          $('#second-number').animate({num: 300 - 10}, {
            duration: 4000, step: function (num) {
              calcnum = Math.floor(num + 50);

              var n = calcnum.toString();

              this.innerHTML = n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
            }
          });

          $('#third-number').animate({num: 149999 - 300}, {
            duration: 4000, step: function (num) {
              calcnum = Math.floor(num + 300);

              var n = calcnum.toString();

              this.innerHTML = n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
            }
          });

          $('#fourth-number').animate({num: 5000 - 50}, {
            duration: 4000, step: function (num) {
              calcnum = Math.floor(num + 50);

              var n = calcnum.toString();

              this.innerHTML = n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
            }
          });
        }
      });
    }
    /* /counter */

    /* question */
    var agAccordionTitle = $('.js-accordion_title-item');

    agAccordionTitle.on('click', function () {
      var accordionCatText = $(this).parent('.js-accordion_item').children('.js-accordion_info');

      if (accordionCatText.css('display') == 'none') {
        accordionCatText.slideDown();

        $(this).addClass('js-ag-accordion_title-item__open');
      }else{
        accordionCatText.slideUp();

        $(this).removeClass('js-ag-accordion_title-item__open');
      }
    });
    /* /question */

    /* professional carousel */
    $('.js-prof-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-prof-carousel-arrow_prev',
      nextArrow: '.js-ag-prof-carousel-arrow_next',
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    /* /professional carousel */

    /* client carousel */
    $('.js-client-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-client-carousel-arrow_prev',
      nextArrow: '.js-ag-client-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /client carousel */

    /* disease advantage carousel */
    $('.js-disease-advantage-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-disease-advantage-carousel-arrow_prev',
      nextArrow: '.js-ag-disease-advantage-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /disease advantage carousel */

    /* doctor certificate carousel */
    $('.js-doctor-certificate-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      prevArrow: '.js-ag-doctor-certificate-carousel-arrow_prev',
      nextArrow: '.js-ag-doctor-certificate-carousel-arrow_next',

      variableWidth: true,
      centerMode: true,
      centerPadding: '100px',

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerPadding: '10px',
            variableWidth: false,
            centerMode: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: '10px',
            variableWidth: false,
            centerMode: false
          }
        }
      ]
    });
    /* /doctor certificate carousel */

    /* /timeline carousel */
    $('.js-timeline-carousel_nav').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      arrows: false,

      variableWidth: true,
      centerMode: true,

      asNavFor: '.js-timeline-carousel',
      focusOnSelect: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {

            slidesToShow: 8
          }
        },
        {
          breakpoint: 0,
          settings: {
            centerMode: false
          }
        }
      ]
    });

    $('.js-timeline-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,

      slidesToShow: 1,
      slidesToScroll: 1,

      prevArrow: '.js-ag-timeline-carousel-arrow_prev',
      nextArrow: '.js-ag-timeline-carousel-arrow_next',

      asNavFor: '.js-timeline-carousel_nav',
      speed: 500,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            centerMode: false
          }
        }
      ]
    });
    /* /timeline carousel */

    /* clinic city why carousel */
    $('.js-clinic-city-why-carousel').slick({
      infinite: true,
      autoplay: true,
      arrows: false,
      fade: true,
      cssEase: 'ease',
      autoplaySpeed: 5000
      /*slidesToShow: 1,
      slidesToScroll: 1,*/
    });
    /* /clinic city why carousel */

    /* clinic city disease carousel */
    $('.js-clinic-city-disease-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-clinic-city-disease-carousel-arrow_prev',
      nextArrow: '.js-ag-clinic-city-disease-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }]
    });
    /* /clinic city disease carousel */

    /* category carousel */
    $('.js-category-carousel').slick({
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '.js-ag-category-carousel-arrow_prev',
      nextArrow: '.js-ag-category-carousel-arrow_next',

      variableWidth: true,
      /*centerMode: true,*/
      centerPadding: '100px',

      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /category carousel */

    /* scroll text */
    function agScrollText(argMarqueeBox, argMarqueeText) {
      var agBodyWidth = $('body').width(),
        agTextWidth = $(argMarqueeText).width();

      agText = $(argMarqueeBox).html();
      agCount = Math.ceil(4 * agBodyWidth / agTextWidth);

      for (var i = 0; i < agCount; i++) {
        $(argMarqueeBox).append(agText);
      }

      $(window).on('scroll', function () {
        var agTarget = $(argMarqueeBox),
          agTargetPos = agTarget.offset().top - 100,
          agWinHeight = $(window).height(),
          agScrollToElem = agTargetPos - agWinHeight,
          agWinScrollTop = $(this).scrollTop();

        if (agWinScrollTop > agScrollToElem) {
          var agPosX = $(window).scrollTop(),
            agDirection = '-' + (agPosX - agScrollToElem) + 'px';

          $(argMarqueeBox).css({
            '-webkit-transform': 'translateX(' + agDirection + ')',
            '-moz-transform': 'translateX(' + agDirection + ')',
            '-ms-transform': 'translateX(' + agDirection + ')',
            '-o-transform': 'translateX(' + agDirection + ')',
            'transform': 'translateX(' + agDirection + ')'
          });
        }
      });
    }

    if ($('.js-marquee_box').length) {
      agScrollText('.js-marquee_box', '.js-marquee_text');
    }

    if ($('.js-marquee_box-v2').length) {
      agScrollText('.js-marquee_box-v2', '.js-marquee_text-v2');
    }
    /* /scroll text */

    /* video iframe */
    window.youTuber = {
      template: '<iframe width="100%" height="100%" allow="autoplay" src="https://www.youtube.com/embed/[%videoid%]?autoplay=1&amp;origin=https%3A%2F%2Fkuk.edu.ua" allowfullscreen="" frameborder="0" allowfullscreen=""></iframe>',

      init: function(selector) {
        $(selector).on('click', function() {
          if ($(this).find("iframe").size() == 0) {
            youTuber.loadItem($(this));
          }
        });
      },

      loadItem: function (container) {
        var videoId = container.attr('data-video-id');

        if (typeof videoId !== 'undefined') {
          container.html(youTuber.template.replace("[%videoid%]", videoId));
          /*container.addClass("js-ag-video-played");*/
        }
      }

    }

    youTuber.init('.js-videos');
    /* /video iframe */


    /* tabs */
    var agTabs = $('.js-tabs'),
      agTabsLink = agTabs.children('li').children('a');

    agTabsLink.on('click', function (e) {
      e.preventDefault();

      var $this = $(this),
        agID = $this.attr('href');

      if ($this.hasClass('ag-tabs_btn__active')) {
        return e.preventDefault();
      }

      $('.js-tab-body').hide();

      $(agID).fadeIn();

      agTabsLink.removeClass('ag-tabs_btn__active');

      $this.addClass('ag-tabs_btn__active');

      return false;
    });

    /*
      agTabs.each(function () {
        return window.location.hash.length > 0 ? $(this).children('li').children('a[href="' + window.location.hash.toString() + '"]').click() : void 0;
      });
    */
    /* /tabs */


    /* content more */
    $('.js-content-more_link').on('click', function (e) {
      e.preventDefault();

      $(this).hide();
      $(this).siblings('.js-ag-content_box__hide').slideDown();
    });
    /* /content more */


    /* description */
    $('.js-ag-descr_scroll').on('click', function () {
      $(this).parent('.js-ag-descr_box').toggleClass('js-ag-descr_scroll__open');
    });
    /* /description */


    /* popup */
    function agPopup (argPopupBtnOpen, argPopupForm, argPopupBtnClose) {
      $(argPopupBtnOpen).on('click', function (e) {
        e.preventDefault();

        if ($(argPopupForm).css('display') == 'none') {
          $(argPopupForm).fadeIn();
          $('html, body').addClass('js-ag-body-noscroll');
        }
      });

      $(argPopupBtnClose).on('click', function () {
        agPopupClose()
      });

      function agPopupClose() {
        if ($(argPopupForm).css('display') == 'block') {
          $(argPopupForm).fadeOut();
          $('html, body').removeClass('js-ag-body-noscroll');
        }
      }

      $(document).bind('keyup', function (e) {
        if (e.keyCode != 27) {
          return true;
        }
        /* 'Esc' key (27) */
        if (e.keyCode == 27 && $(argPopupForm).is(':visible')) {
          agPopupClose();
        }
      });

      $(document).mouseup(function (e) {
        if ((!$(argPopupForm).is(e.target) && $(argPopupForm).has(e.target).length === 0)) {
          agPopupClose();
        }
      });
    }


    if ($('.js-popup_btn__appointment').length) {
      agPopup ('.js-popup_btn__appointment', '.js-popup-form__appointment', '.js-popup-form_btn__close__appointment');
    }

    if ($('.js-popup_btn__consultation').length) {
      agPopup ('.js-popup_btn__consultation', '.js-popup-form__consultation', '.js-popup-form_btn__close__consultation');
    }
    /* /popup */


    /* scroll fixed column  */
    if ($('.js-faq-block').length) {
      var agTop = $('.js-faq-block').offset().top;

      function agCheckTablet() {
        return $(window).width() <= 757;
      }

      $(window).on('scroll', function () {
        if ($(window).scrollTop() > agTop && !agCheckTablet()) {
          $('.js-showtime-movie:visible').each(function () {
            var agShowtimeBox = $(this).find('.js-faq-tab_list');

            if ($(this).offset().top < $(window).scrollTop()) {
              if ($(this).offset().top + $(this).outerHeight() - 200 > $(window).scrollTop()) {
                agShowtimeBox.hasClass('js-ag-faq-tab_list__sticked') || agShowtimeBox.addClass('js-ag-faq-tab_list__sticked');
              } else {
                agShowtimeBox.removeClass('js-ag-faq-tab_list__sticked');
              }
            } else {
              agShowtimeBox.removeClass('js-ag-faq-tab_list__sticked');
            }
          });
        } else {
          $('.js-showtime-movie:visible .js-ag-faq-tab_list__sticked').removeClass('js-ag-faq-tab_list__sticked');
        }
      });
    }
    /* /scroll fixed column  */

    /* tab scroll */
    if ($('.js-faq_box').length) {
      $('.js-faq-tab_link').on('click', function (e) {
        e.preventDefault();

        var agTabScrollHash = $(this).attr('href'),
          agTabScrollAnchor = $(agTabScrollHash).offset().top;

        $('body, html').animate({scrollTop: agTabScrollAnchor}, 500);
      });

      $(window).on('scroll', function () {

        $('.js-faq_box:visible').each(function () {

          if ($(this).offset().top - 100 < $(window).scrollTop()) {
            $('.js-faq-tab_link').removeClass('ag-faq-tab_link__active');
            $('.js-faq-tab_link[href=#' + $(this).attr('id') + ']').addClass('ag-faq-tab_link__active');
          }
        });

      });
    }
    /* /tab scroll */

    /* parallax */
    $.fn.parallax = function(options) {

      var windowHeight = $(window).height();

      // Establish default settings
      var settings = $.extend({
        isPosBG         : true,
        xPosBG          : '50%',
        yPosBG          : 0,
        speedBG         : 0.15,

        isPos           : true,
        yPosBottom      : 0,
        speedPosBottom  : 0,
        direction       : 1
      }, options);

      // Iterate over each object in collection
      return this.each( function() {

        // Save a reference to the element
        var $this = $(this);

        // Set up Scroll Handler
        $(document).scroll(function(){

          var scrollTop = $(window).scrollTop();
          var offset = $this.offset().top;
          var height = $this.outerHeight();

          // Check if above or below viewport
          if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
            return;
          }

          var yPositionBG = Math.round((offset - scrollTop) * settings.speedBG) + parseInt(settings.yPosBG),
            yPositionBoxBottom = Math.round((offset - scrollTop) * settings.speedPosBottom) + parseInt(settings.yPosBottom);

          // Apply the Y Background Position to Set the Parallax Effect
          if(settings.isPosBG) {
            $this.css({'background-position': settings.xPosBG + yPositionBG + 'px'});
          }else if(settings.isPos) {
            $this.css({'bottom': settings.direction * yPositionBoxBottom + 'px'});
          } else {
            $this.css({'background-position': settings.xPosBG + yPositionBG + 'px', 'bottom': settings.direction * yPositionBoxBottom + 'px'});
          }

        });
      });
    };

    window.mobileAndTabletCheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    var agDisplayWidth = $(window).width();

    $(window).resize(function () {
      if (agDisplayWidth > '750') {
        if(!window.mobileAndTabletCheck()) {
          $('.js-primary_parallax__home').parallax({
            xPosBG: '100%',
            yPosBG: 0,
            speedBG: -0.15,

            isPos: false
          });

          /*$('.js-primary_parallax__phone').parallax({
            isPos: false,
            yPosBG: 0,
            speedBG: -0.1
          });*/
        }
      }

    }).resize();
    /* /parallax */



    $('#popup-appointment-phone').mask('+380(999) 999-99-99');
    $('#popup-consultation-phone').mask('+380(999) 999-99-99');
    $('#phone').mask('+380(999) 999-99-99');


    $('select').styler({
      selectSearch: true
    });

  });
})(jQuery);