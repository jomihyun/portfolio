$(function () {

	var $header = $('.header');
	var $toggle = $('.header__toggle');
	var $nav = $('.nav');
	var $overlay = $('.nav__overlay');
	var $navLinks = $('.nav__list a');

	function openNav() {
	  $nav.addClass('nav--open');
	  $overlay.addClass('is-active');
	  $toggle.addClass('is-active').attr('aria-expanded', 'true');
	  $header.addClass('header--open');
	  $nav.find('a').first().focus();
	  $('body').css('overflow', 'hidden');
	}
	function closeNav() {
	  $nav.removeClass('nav--open');
	  $overlay.removeClass('is-active');
	  $toggle.removeClass('is-active').attr('aria-expanded', 'false');
	  $header.removeClass('header--open');
	  $('body').css('overflow', '');
	  $toggle.focus();
	}

	// 토글
	$toggle.on('click', function(e) {
	  e.preventDefault();
	  if ($nav.hasClass('nav--open')) {
		closeNav();
	  } else {
		openNav();
	  }
	});

	$overlay.on('click', function() {
		closeNav();
	});

	$navLinks.on('click', function() {
		closeNav();
		$('.header .nav__item a').on('click', function (e) {
			e.preventDefault();
			const targetSelector = $(this).data('target');
			if (targetSelector) {
				const targetOffset = $(targetSelector).offset().top;
				$('html, body').animate({ scrollTop: targetOffset }, 600);
			}
		});
	});

	// ESC 키로 닫기
	$(document).on('keydown', function(e) {
	  if (e.key === 'Escape' || e.keyCode === 27) {
		if ($nav.hasClass('nav--open')) closeNav();
	  }
	});

	$(window).on('scroll', function () {
		const currentScrollPos = $(this).scrollTop();
		const headerHeight = $('.header').outerHeight();

		if (currentScrollPos > headerHeight) {
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on');
		}

		const homeOffsetTop = $('.about').offset().top;
		if (currentScrollPos > homeOffsetTop) {
			$('.arrow-up').addClass('on');
		} else {
			$('.arrow-up').removeClass('on');
		}
	});

	// about 섹션 진입시 헤더 변경
	$(window).on('scroll resize load', function() {
		const curr = $(this).scrollTop();
		const winH = $(this).height();
		const mid = curr + winH / 2;
		const $about = $('.about');
		if (!$about.length) return;
		const aboutTop = $about.offset().top;
		const aboutBottom = aboutTop + $about.outerHeight();

		if (mid >= aboutTop && mid <= aboutBottom) {
			$('.header').addClass('header--about');
		} else {
			$('.header').removeClass('header--about');
		}
	});

	gsap.registerPlugin(ScrollTrigger);

	// cursor
	$('body').on('mousemove', function (e) {
		gsap.to('#cursor', {
		duration: 0.5,
		x: e.clientX,
		y: e.clientY,
		ease: 'power3.out'
		});
	});

	// 상단으로 스크롤
	$('.arrow-up').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	});


	// 텍스트 스크롤 효과 (`.scroll span`)
	gsap.to('.scroll span', {
		y: 40,
		yoyo: true,
		repeat: -1,
		duration: 1,
		ease: 'power1.inOut'
	});

	// 스크롤 진행 바 (`.loading-bar__progress`)
	gsap.to('.loading-bar__progress', {
		width: '100%',
		scrollTrigger: {
		trigger: 'html',
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1,
		},
	});

	// 메인 배경 및 텍스트 애니메이션 (`.home` 섹션)
	gsap.timeline({
		scrollTrigger: {
		trigger: '.home',
		pin: true, // .home 고정
		start: 'top top',
		end: '+=2000',
		scrub: 1,
		}
	})
	.to('.home__bg', { scale: 1.3 })
	.fromTo('.home__text', { opacity: 0 }, { opacity: 1, delay: 0.2 })
	.to('.header', { y: 0 }, '<'); // 헤더는 이미 위에 다른 스크롤 로직이 있지만, 만약을 대비하여 timeline에 추가. (<는 이전 트윈과 동시에 시작)

	// About 애니메이션
	gsap.fromTo('.about .skills__list', {
			opacity: 0,
			y: 50
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '.about .skills__list',
				start: 'top 80%',
				toggleActions: 'play none none reverse', // 스크롤 다운 재생, 스크롤 업 역재생
		}
	});

	// profile 애니메이션
	ScrollTrigger.matchMedia({
		// 700px 이하일 때
		"(max-width: 700px)": function () {
			return gsap.fromTo('.profile__bg-text',
				{ x: '-100%', opacity: 0 },
				{
					x: '5%',               // <=700px에서는 0%
					opacity: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.profile',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					}
				}
			);
		},
		// 701px 이상일 때
		"(min-width: 701px)": function () {
			return gsap.fromTo('.profile__bg-text',
				{ x: '-100%', opacity: 0 },
				{
					x: '30%',              // >700px에서는 30%
					opacity: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.profile',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					}
				}
			);
		}
	});

	// work 애니메이션 (`.bg-txt`)
	gsap.utils.toArray('.work-card').forEach((card, i) => {
		const bgText = card.querySelector('.work-card__bg-text');
		if (!bgText) return; // 요소가 없으면

		// 홀수 짝수 번째 카드가 반대 방향에서 나오도록 설정
		const startX = (i % 2 === 0) ? '-100%' : '100%'; // 0, 2, 4번째 카드는 왼쪽에서, 1, 3번째 카드는 오른쪽에서

		gsap.fromTo(bgText, {
			x: startX,
			opacity: 0
		}, {
			x: '0%',
			opacity: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: card,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true, // 스크롤 1:1
				// markers: true, // 디버깅용 마커
			}
		});

		// ScrollTrigger.matchMedia({
		// 	// 700px 이하일 때
		// 	"(max-width: 700px)": function() {
		// 		return gsap.fromTo('.work-card__bg-text',{
		// 			x: startX,
		// 			opacity: 0
		// 			}, {
		// 				x: '50%',
		// 				opacity: 1,
		// 				ease: 'power2.out',
		// 				scrollTrigger: {
		// 					trigger: '.work',
		// 					start: 'top bottom',
		// 					end: 'bottom top',
		// 					scrub: true,
		// 				}
		// 			}
		// 		);
		// 	},
		// 	// 701px 이상일 때
		// 	"(min-width: 701px)": function () {
		// 		return gsap.fromTo('.work-card__bg-text',
		// 			{ x: '-100%', opacity: 0 },
		// 			{
		// 				x: '30%',              // >700px에서는 30%
		// 				opacity: 1,
		// 				ease: 'power2.out',
		// 				scrollTrigger: {
		// 					trigger: '.work',
		// 					start: 'top bottom',
		// 					end: 'bottom top',
		// 					scrub: true,
		// 				}
		// 			}
		// 		);
		// 	}
		// });


	});




});