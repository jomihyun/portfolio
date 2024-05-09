$(function(){
  skillFlag = 1;

  $(window).scroll(function(){

    curr = $(this).scrollTop();
    header = $('.header').height();
    // about = $('.about').offset().top;
    // work = $('.work').offset().top;
    home = $('.home').offset().top ;


    if(header < curr){
      $('.header').addClass('on');
    }else{
      $('.header').removeClass('on');
    }   


    if(home < curr){
      $('.arrow-up').addClass('on');
    } else {
      $('.arrow-up').removeClass('on');
    }

    skill = $('.about-wrap .skills').offset().top - 400;

    if(curr > skill){
      if(skillFlag == 1){
        skillAni();
        skillFlag = 0;
      }
    }

  });

  $('.arrow-up').click(function(){
    $('html').animate({scrollTop : 0})
  })

  $('.header .navbar-item a').click(function(){
    el = $(this).data('target');
    eloff = $(el).offset().top;
    $('html,body').animate({scrollTop:eloff},300);
  })

  // TweenMax  
  var scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: '100%',
    offset: 400,
  })
  .addTo(controller)

  
  gsap.to('.scroll span',{
    y:40,
    yoyo:true,
    repeat:-1,
    duration:1,
  });

  //scroll process bar
  total = $('html').height()+2000-$(window).height();
    gsap.to('.precent span',{
      scrollTrigger: {
        trigger: "html",
        start: "top top",
        end: total,
        scrub: 1,
      },
    width:'100%',
  });

  // main bg
  let home = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      pin: true,  
      start: "top top", 
      end: "+=1000", 
      scrub: 1, 
    }
  });
  home.to('.home .bg',{scale:1.3})
      .fromTo('.home .txt-wrap',{opacity:0},{opacity:1})
      .to('.header',{y:0})

  //about 
  let about = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 100%",
      end: "bottom", 
      scrub: 1, 
    }
  });
  // about.to('.home .bg',{y:'20%'})

  //about skills
  var controller = new ScrollMagic.Controller();
  function skillAni(){
    var skill = TweenMax.staggerFromTo('.about-wrap .skills ul li', 1,
    {
      opacity: 0,
      y:100,
    },
    {
      opacity: 1,
      y:0,
    },
      0.1 //각각의 모션의 속도
    );
  }









  $('body').mousemove(function(e) {
    //마우스 오버
      TweenMax.to( $('#cursor'), 0.5, {
          x: e.clientX,
          y: e.clientY,
          ease: Power3.easeOut
      });
  });



})


