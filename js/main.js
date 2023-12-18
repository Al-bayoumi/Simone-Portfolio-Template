$(document).ready(function () {
  let sectionTop = $("#about").offset().top

  // **************** navbar **************************
  $(window).scroll(function () {

    let scrollTop = $(window).scrollTop()
    if (scrollTop > sectionTop) {
      $(".navbar").addClass("bg-success")
      $(".navbar").addClass("p-2")
      $(".home").addClass("text-white")
      $(".icon").fadeIn(1000)
    } else {
      $(".navbar").removeClass("bg-success")
      $(".navbar").removeClass("p-2")
      $(".home").removeClass("text-white")
      $(".icon").fadeOut(1000)
    }
  })
  // **************** /navbar **************************

  // **************** active ***************************
  $(".nav-link").click(function () {
    let hreF = $(this).attr("href")
    let sectionTop = $(hreF).offset().top
    $("html,body").animate({ scrollTop: sectionTop }, { duration: 2000, queue: false })

    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")
    // $(this).parent().siblings().children().removeClass("active")
    // دى تنفع برضوا معايا عادى 
  })
  // **************** /active ***************************

  // **************** circle-up *************************
  $(".icon").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000)
  })
  // **************** /circle-up ************************

  // **************** settings ************************
  $(".setting-icon").click(function () {
    let left = $(".settings").css("left")
    if (left == "0px") {
      let widthInner = $(".setting-inner").outerWidth(true)
      $(".settings").animate({ left: `-${widthInner}px` }, 1000)
    } else {
      $(".settings").animate({ left: `0px` }, 1000)
    }
  })
  let widthInner = $(".setting-inner").outerWidth(true)
  $(".settings").css({ left: `-${widthInner}px` })

  $(".box").click(function () {
    let color = $(this).css("background-color")
    localStorage.setItem("color", color)
    $(":root").css("--maincolor", color)
  })

  if (localStorage.getItem("color") != null) {
    $(":root").css("--maincolor", localStorage.getItem("color"))
  }

  $(".boxbg img").click(function () {
    let imgPath = $(this).attr("src")
    localStorage.setItem("background-image", `url(${imgPath})`)
    $("#home").css("background-image", `url(${imgPath})`)
  })
  if (localStorage.getItem("background-image") != null) {
    $("#home").css("background-image", localStorage.getItem("background-image"))
  }
  // **************** /settings ************************


  $(".landing").slideUp(5000)
})