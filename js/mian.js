var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });
var music =document.getElementById("music");
var musicIg =document.querySelectorAll(".musicIg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio= document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag == 1){
        musicIg.style.display="none";
        musicImg.style.animation="none";
        audio.pause();
        flag=0;
    }else{
        musicIg.style.display="block";
        musicImg.style.animation=" turn 6s infinite linear";
        audio.play();
        flag=1;
    }
}