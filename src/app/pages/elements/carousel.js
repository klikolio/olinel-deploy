$(function() {
  const isRtl = $("html").attr("dir") === "rtl"
  const navIcons = {
    prev: `fa fa-angle-${isRtl ? "right" : "left"}`,
    next: `fa fa-angle-${isRtl ? "left" : "right"}`
  }

  $("#slick-1").slick({
    rtl: isRtl, // Set direction
    prevArrow: '<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
    nextArrow: '<button class="btn btn-flat-primary slick-next" type="button">Next</button>'
  })

  $("#slick-2").slick({
    rtl: isRtl, // Set direction
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
    nextArrow: '<button class="btn btn-flat-primary slick-next" type="button">Next</button>'
  })

  $("#slick-3").slick({
    rtl: isRtl, // Set direction
    centerMode: true,
    prevArrow: `
      <button type="button" class="btn btn-flat-primary slick-prev-2">
        <i class="${navIcons.prev}"></i>
      </button>
    `,
    nextArrow: `
      <button type="button" class="btn btn-flat-primary slick-next-2">
        <i class="${navIcons.next}"></i>
      </button>
    `
  })

  $("#slick-4").slick({
    rtl: isRtl, // Set direction
    prevArrow: `
      <button type="button" class="btn btn-flat-primary slick-prev-3">
        <i class="${navIcons.prev}"></i>
      </button>
    `,
    nextArrow: `
      <button type="button" class="btn btn-flat-primary slick-next-3">
        <i class="${navIcons.next}"></i>
      </button>
    `
  })

  $("#slick-5").slick({
    rtl: isRtl, // Set direction
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    prevArrow: '<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
    nextArrow: '<button class="btn btn-flat-primary slick-next" type="button">Next</button>'
  })

  $("#slick-6").slick({
    rtl: isRtl, // Set direction
    dots: true,
    prevArrow: '<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
    nextArrow: '<button class="btn btn-flat-primary slick-next" type="button">Next</button>'
  })

  $("#slick-7-for").slick({
    rtl: isRtl, // Set direction
    arrows: false,
    asNavFor: "#slick-7-nav"
  })

  $("#slick-7-nav").slick({
    rtl: isRtl, // Set direction
    centerMode: true,
    slidesToShow: 3,
    asNavFor: "#slick-7-for",
    focusOnSelect: true,
    prevArrow: `
      <button type="button" class="btn btn-flat-primary slick-prev-2">
        <i class="${navIcons.prev}"></i>
      </button>
    `,
    nextArrow: `
      <button type="button" class="btn btn-flat-primary slick-next-2">
        <i class="${navIcons.next}"></i>
      </button>
    `
  })
})
