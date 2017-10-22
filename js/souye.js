/**
 * Created by Administrator on 2017/10/12.
 */

$(function(){
    "use strict";
var index = 0;
var timer = 0;
 $('.banner-btn-box li').bind('mouseover', function() {
    clearInterval(timer);
    index = $('.banner-btn-box li').index($(this));
    $(this).addClass('current').siblings().removeClass('current');

    $('.banner-list li').eq(index).fadeIn(100).siblings().fadeOut(300);

}).bind('mouseleave',function() {
    clearInterval(timer);
    num = index;
    timer = setInterval(btnChange, 3000);
});
var num = 0;
var lens = $('.banner-list  li').length;
timer = setInterval(btnChange, 3000);
function btnChange() {
    $('.banner-btn-box  li').eq(num).addClass('current').siblings().removeClass('current');
    $('.banner-list  li').eq(num).fadeIn(200).siblings().fadeOut(500);
    num++;
    if(num == lens) {
        num = 0;
    };
};
//tab切换
$(".hot-recommend-nav li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var num=$(this).index();
    $(".hot-recommend-content").animate({marginLeft:-290*num},"50s");
    $(".line").animate({marginLeft:+97*num},"3s");
});


    });