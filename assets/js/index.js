$(window).scroll(function () {
  $(".navigation-bar").toggleClass("scrolled", $(this).scrollTop() > 100);
});

$(document).ready(function () {
  $(".logo").click(function () {
    window.location.href = "index.html";
  });

  $(".ham").click(function () {
    $(".ham-menu").toggle();
    $(".navigation-bar").toggleClass("scrolled");
  });

  $(".login-btn, .login-page-link").click(function () {
    window.location.href = "login.html";
  });

  $(".signup-btn, .signup-page-link").click(function () {
    window.location.href = "signup.html";
  });

  $(".movie-card").hover(function (event) {
    $(this).find(".backdrop").toggle();
  });

  $(".view-details").click(function () {
    window.location.href = "movie-details.html";
  });

  $(".forgot").click(function () {
    $(".login-form").hide();
    $(".forgot-form").show();
  });

  $(".booking-date, .booking-time").click(function () {
    $(this).css(
      "background-image",
      "-webkit-linear-gradient(169deg,#5560ff 17%,#aa52a1 63%,#ff4343 100%)"
    );
    $(this).css("border", "1px solid #0f5ae0");
    $(this).siblings().css("background-image", "none");
    $(this).siblings().css("border", "1px solid #a3b1c633");
  });

  $(".fa-couch").click(function () {
    if ($(this).hasClass("booked")) {
      alert("This seat is already booked");
    } else if ($(this).hasClass("available")) {
      $(this).toggleClass("selected");
    }
  });

  // $(".selected").click(function () {
  //   $(this).toggleClass("available");
  // });

  // tabbed pane
  // $("#demo").rTabs();

  $("#demo").rTabs({
    // initial slide
    defaultShow: 0,

    // selectors for next/prev buttons
    prev: "#prev",
    next: "#next",

    // CSS class of tabs
    btnClass: ".j-tab-nav",

    // CSS class of tab panels
    conClass: ".j-tab-con",

    // click or hover
    bind: "click",

    // or left, up, fadein
    animation: "0",

    // animation speed
    speed: 300,

    // animation delay
    delay: 200,

    // auto swtiching between tabs
    auto: false,
  });
});
