$(document).ready(function() {
  $('.slick_banner').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_career').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        console.log(slider);
        return '<div class="count_number">' + (i + 1) + '/' + '<span>' + slider.slideCount + '</span>' + '</div>' + '<span class="count"></span>';
    },
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_recruit').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.bota_career_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_jobs_hot').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_corner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_news_business').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slick_employers').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
   autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });
});
// Scroll To Top //
$(document).ready(function(){
  $('.bota_aside_filter .bota_aside_item .bota_aside_title').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    $this.parents('.bota_aside_filter .bota_aside_item').find('.bota_aside_content').stop().slideToggle();
    $(this).toggleClass('active');
    return false;
  });
  $(".bota_icon_scrolltop").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 1000);
 });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {   
      $('.bota_scrolltop,.bota_header_nav').addClass('fixed');
    }
    else
    {
      $('.bota_scrolltop,.bota_header_nav').removeClass('fixed');
    }
  });
});  
// End Scroll To Top //