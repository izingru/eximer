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


    $('#popup-appointment-phone').mask('+380(999) 999-99-99');
    $('#popup-consultation-phone').mask('+380(999) 999-99-99');
    $('#phone').mask('+380(999) 999-99-99');


    $('select').styler({
      selectSearch: true
    });

  });
})(jQuery);