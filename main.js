$(function () {
  
  $(window).scroll(function () {

    curr = $(this).scrollTop();
    header = $('.header').height();
    about = $('.about').offset().top;
    // work = $('.work').offset().top;
    home = $('.home').offset().top;

    if (header < curr) {
      $('.header').addClass('on');
    } else {
      $('.header').removeClass('on');
    }

    if (home < curr) {
      $('.arrow-up').addClass('on');
    } else {
      $('.arrow-up').removeClass('on');
    }

  });

  $('body').mousemove(function (e) {
    TweenMax.to($('#cursor'), 0.5, {
      x: e.clientX,
      y: e.clientY,
      ease: Power3.easeOut
    });
  });

  $('.arrow-up').click(function () {
    $('html').animate({ scrollTop: 0 })
  })

  $('.header .navbar-item a').click(function () {
    el = $(this).data('target');
    eloff = $(el).offset().top;
    $('html,body').animate({ scrollTop: eloff }, 300);
  })


  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: '100%',
    offset: 400,
  })
  .addTo(controller)
   
  gsap.to('.scroll span', {
    y: 40,
    yoyo: true,
    repeat: -1,
    duration: 1,
  });

  //scroll process bar
  total = $('html').height() + 2000 - $(window).height();
  gsap.to('.precent span', {
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      end: total,
      scrub: 1,
    },
    width: '100%',
  });

  // main bg
  let home = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      pin: true,
      start: "top top",
      end: "+=2000",
      scrub: 1,
    }
  });
  home.to('.home .bg', { scale: 1.3 })
      .fromTo('.home .txt-wrap', { opacity: 0 }, { opacity: 1 })
      .to('.header', { y: 0 })


  //about skills
  let skills = gsap.timeline({
    scrollTrigger: {
      trigger: ".about .skills-list",
      scrub: 1,
    }
  });
  skills.fromTo('.about .skills-list li', { opacity: 0 }, { opacity: 1 });

  // 텍스트 이동
  let bgTxt = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile-detail",
      scrub: 1,
    }
  });
  bgTxt.fromTo('.bg-txt.txt01', { x: '-100%' }, { x: '0' })
      .fromTo('.bg-txt.txt02', { x: '100%' }, { x: '-100%' }) 

  // var txt01 = TweenMax.fromTo(".bg-txt.txt01", 0.6, { x: '50%' }, { x: '-100%' });
  // var txt02 = TweenMax.fromTo(".bg-txt.txt02", 0.6, { x: '-50%' }, { x: '100%' });
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: ".profile .img-wrap",
  //   duration: '100%'
  // })
  // .setTween(txt01)
  // .addTo(controller)

  // var skills = TweenMax.staggerFromTo('.about .skills-list li', 0.4,
  //   {
  //     y: 150,
  //     opacity: 0
  //   },
  //   {
  //     y: 0,
  //     opacity: 1
  //   },
  // );
  
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: ".about .skills-list",
  //   duration: 150
  // })
  // .setTween(skills)
  // .addTo(controller)
  // .addIndicators({
  //   name: "1"
  // });



















})


