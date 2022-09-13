$(function () {
  //==========Searchbar===============
  $('.nav-serch').on('click', function () {
    $('.search-bar').addClass('search-bar-show');
  });
  $('.search-cross').on('click', function () {
    $('.search-bar').removeClass('search-bar-show');
  });
  //=================serch bar part end=================
  //=================bannar-slider part start=================
  $('.bannar-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".left",
    nextArrow: ".right",
  });
  //=================bannar-slider part end=================
  //=================style slider part start=================
  $('.style').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    // prevArrow:"#",
    // nextArrow:"#",
    pauseOnHover: false,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================style slider part end=================
  //=================featured bar part start=================
  // $('.featured').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   arrows: false,
  //   prevArrow:"#",
  //   nextArrow:"#",
  //   pauseOnHover: false,
  // });
  //=================featured bar part end=================
  //=================microsoft countdown part start=================
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "03/16/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
  //=================microsoft countdown part end=================
  //=================latest slider part start=================
  $('.latest').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".l-left",
    nextArrow: ".l-right",
    pauseOnHover: false,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================latest slider part end=================
  //=================testimonial slider part start=================
  $('.testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".t-left",
    nextArrow: ".t-right",
    pauseOnHover: true,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================testimonial slider part end=================
  //=================blog slider part start=================
  $('.blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    prevArrow: "#",
    nextArrow: "#",
    pauseOnHover: false,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================blog slider part end=================
  //=================sticky-menu slider part start=================
  $(window).scroll(function () {
    var top = $(this).scrollTop()
    if (top > 300) {
      $(".navbar").addClass("sticky-menu")
    } else {
      $(".navbar").removeClass("sticky-menu")
    }
    if (top > 300) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  })
  //=================sticky-menu slider part end=================
  //=================back-to-top slider part start=================
  $(".back-to-top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1000)
  })
  //=================back-to-top slider part end=================
  //=================h-bannar slider part start=================
  $('.h-bannar-wraper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".h-b-left",
    nextArrow: ".h-bright",
  });
  //=================h-bannar slider part end=================
  //=================watches slider part start=================
  $('.hot-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".h-h-left",
    nextArrow: ".h-h-right",
    pauseOnHover: false,
  });
  //=================featured-home slider part end=================
  $('.f-featured').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".h-f-left",
    nextArrow: ".h-f-right",
    pauseOnHover: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================h-fetured slider part start=================
  //=================h-testimonial slider part end=================
  $('.h-blog').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    prevArrow: "#",
    nextArrow: "#",
    pauseOnHover: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  $('.h-slide-testimonial').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".h-test-left",
    nextArrow: ".h-test-right",
    pauseOnHover: false,
  });
  //=================h-testimonial slider part start=================
  //=================thems-center-mode slider part end=================
  $('.thems').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".thems-left",
    nextArrow: ".thems-right",
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });
  //=================thems-center-mode slider part start=================
  //=================counter-up part end=================
  $('.up').counterUp({
    delay: 10,
    time: 2500
  });
  //=================counter-up part start=================
  //=================watches slider part end=================
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var w1 = 40;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var w2 = 40;
    var r2 = x2 + w2;

    if (r1 < x2 || x1 > r2)
      return false;
    return true;
  }
  // Fetch Url value 
  var getQueryString = function (parameter) {
    var href = window.location.href;
    var reg = new RegExp('[?&]' + parameter + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };
  // End url 
  // // slider call
  $('#slider').slider({
    range: true,
    min: 0,
    max: 330,
    step: 1,
    values: [getQueryString('minval') ? getQueryString('minval') : 30, getQueryString('maxval') ? getQueryString('maxval') : 300],

    slide: function (event, ui) {

      $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
      $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
      $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

      // get values of min and max
      $("#minval").val(ui.values[0]);
      $("#maxval").val(ui.values[1]);

      if (ui.values[0] == ui.values[1]) {
        $('.price-range-both i').css('display', 'none');
      } else {
        $('.price-range-both i').css('display', 'inline');
      }

      if (collision($('.price-range-min'), $('.price-range-max')) == true) {
        $('.price-range-min, .price-range-max').css('opacity', '0');
        $('.price-range-both').css('display', 'block');
      } else {
        $('.price-range-min, .price-range-max').css('opacity', '1');
        $('.price-range-both').css('display', 'none');
      }

    }
  });

  $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

  $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

  $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');

  //=================watches slider part start=================
  //=================img selector part start=================
  /******* */

  function init() {
    document.getElementById("clickMe1").addEventListener("click", function () {
      document.getElementById("bikini-display1").style.display = "block";
      document.getElementById("bikini-display3").style.display = "none";
      document.getElementById("bikini-display2").style.display = "none";
    });

    document.getElementById("clickMe2").addEventListener("click", function () {
      document.getElementById("bikini-display2").style.display = "block";
      document.getElementById("bikini-display1").style.display = "none";
      document.getElementById("bikini-display3").style.display = "none";

    });

    document.getElementById("clickMe3").addEventListener("click", function () {
      document.getElementById("bikini-display3").style.display = "block";
      document.getElementById("bikini-display1").style.display = "none";
      document.getElementById("bikini-display2").style.display = "none";
    });

    document.getElementById("clickMe4").addEventListener("click", function () {
      document.getElementById("bikini-display1").style.display = "none";
      document.getElementById("bikini-display3").style.display = "none";
      document.getElementById("bikini-display2").style.display = "none";
    });
  }
  init();
  //=================img selector part end=================
  //================= part start=================
  $("button").on("click", function (ev) {
    var currentQty = $('input[name="quantity"]').val();
    var qtyDirection = $(this).data("direction");
    var newQty = 0;

    if (qtyDirection == "1") {
      newQty = parseInt(currentQty) + 1;
    } else if (qtyDirection == "-1") {
      newQty = parseInt(currentQty) - 1;
    }

    // make decrement disabled at 1
    if (newQty == 1) {
      $(".decrement-quantity").attr("disabled", "disabled");
    }

    // remove disabled attribute on subtract
    if (newQty > 1) {
      $(".decrement-quantity").removeAttr("disabled");
    }

    if (newQty > 0) {
      newQty = newQty.toString();
      $('input[name="quantity"]').val(newQty);
    } else {
      $('input[name="quantity"]').val("1");
    }
  });

})
//=================mixtup bar part start=================
var containerEl = document.querySelector('#featured');
var mixer = mixitup(containerEl);
//=================mixtup bar part end=================
//venobox strat===============================
new VenoBox({
  selector: '.my-video-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'wander'
});