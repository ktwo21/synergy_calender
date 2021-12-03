AOS.init({
  easing: 'ease-out-back',
  duration: 1500
});

$(function () {

  // スムーススクロール
  let headerHight = 70; //ヘッダの高さ
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // 🍔
  $('.hamburger_button').click(function(){
    $('.hamburger_button').toggleClass('open');
  // クラスの付与で、アイコン切り替え
   $('.hamburger_menu').toggleClass('open');
      // メニューの表示
    $('.bg_gray').fadeToggle();
  });

  $('a').click(function(){
   $('.hamburger_menu').removeClass('open');
    // リンクをクリックしたらメニューを消す
    $('.hamburger_button.open').removeClass('open');
    // バーガーメニューをもとに戻す
    $('.bg_gray').fadeOut();
  });

  //accordion
  $(".accordion_button").click(function(){
    $(".accordion_list").slideDown().animate(
      { opacity: 1 },
      { queue: false, duration: 500 }
    );
    $(".accordion_button").slideUp();
    $(".accordion_close_button").slideDown();
  });

  $(".accordion_close_button").click(function(){
    $(".accordion_list").slideUp().animate(
      { opacity: 0 },
      { queue: false, duration: 500 });
    $(".accordion_button").slideDown().animate(
      { opacity: 1 },
      { queue: false, duration: 500 }
    );
    $(".accordion_close_button").slideUp(1000);
  });

  var swiper = new Swiper('.swiper-container', {
    // loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 150,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // モーダル開く
  $('.card_item').on('click', function(){
    var index = $(this).index();//クリックした要素のインデックスを取得
    swiper.slideTo(index);//指定のスライドを呼び出し
    $('.ModalLayer').addClass('isShow');
  });
  $('.ModalLayer-Mask').on('click', function(){
    $('.ModalLayer').removeClass('isShow');
  });
  $('.JS_Click_CloseModal_Trigger').on('click', function(){
    $('.ModalLayer').removeClass('isShow');
  });


});


//375px以下はviewport固定
const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
