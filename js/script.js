//.ly_fvまでスクロールするとheaderの色が変化
("use strict");

jQuery(window).on("scroll", function () {
  if (jQuery("#services").height() < jQuery(this).scrollTop()) {
    jQuery("header").addClass("show");
    jQuery(".logo-b").addClass("show");
    jQuery(".logo-w").addClass("none");
    jQuery(".bl_drawerBtn").addClass("show");
  } else {
    jQuery("header").removeClass("show");
    jQuery(".logo-w").removeClass("none");
    jQuery(".logo-b").removeClass("show");
    jQuery(".bl_drawerBtn").removeClass("show");
  }
});

/* slick */
$(function () {
  $(".slick-box").slick({
    autoplay: true, //自動再生
    autoplaySpeed: 5000, //自動再生するスピード
    infinite: true, // 無限ループ
    speed: 1000, // 切り替わりのスピード
    fade: true,
    cssEase: "linear",
    arrows: false,
  });
});

/* ドロワーメニュー */
/* drawer */
$(function () {
  $(".bl_drawerBtn").on("click", function () {
    $(this).toggleClass("active");
    $("#el_fullOverlay").toggleClass("active");
    $(".bl_drawer_list").toggleClass("active");
    $("body").toggleClass("noscroll");
  });
});
$(function () {
  //.bl_drawer_itemを押すとついてたactiveが外れてドロワーメニューがひっこむ
  $(".bl_drawer_item").on("click", function () {
    $(".bl_drawerBtn").toggleClass("active");
    $("#el_fullOverlay").toggleClass("active");
    $(".bl_drawer_list").toggleClass("active");
    $("body").removeClass("noscroll");
  });
});
$(function () {
  //.bl_drawer_item a を押すとついてたactiveが外れてドロワーメニューがひっこむ
  $(".bl_drawer_item a").on("click", function () {
    $(".bl_drawerBtn").toggleClass("active");
    $("#el_fullOverlay").toggleClass("active");
    $(".bl_drawer_list").toggleClass("active");
    $("body").removeClass("noscroll");
  });
});

/* smooth scroll */
$(function () {
  var headerHight = 74;
  $('a[href^="#"]').click(function () {
    var speed = 1200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, speed, "easeOutCirc");
    return false;
  });
});

/* ローディングアニメーション */
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});