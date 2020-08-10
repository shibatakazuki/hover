$(function () {
    var header = $('.header');
    $('.header-list', header).mouseover(function (e) {
      $('.header-none', this).stop().slideDown('fast');
    }).mouseout(function (e) {
      $('.header-none', this).stop().slideUp('fast');
    });
  });