import Splitter from 'split-html-to-chars';

// Animation

var bgCurtain = document.querySelector('.bg-curtain');
var bgCircles = document.querySelectorAll('.bg-circle-from-left');
var bgCircleBig = document.querySelector('.bg-circle-from-left_big');
var bgCircleMedium = document.querySelector('.bg-circle-from-left_medium');
var bgCircleSmall = document.querySelector('.bg-circle-from-left_small');

var bgOfBrain = document.querySelector('.bg-behind-brain');
var bgOfBrainBig = document.querySelector('.bg-behind-brain_big');
var brainHimself = document.querySelector('.brain');
var gearsOfBrain = document.querySelectorAll('.brain__gear');

var menuItems = document.querySelectorAll('.main-menu__item');

var mainTitle = document.querySelector('.title-main');
var leftButton = document.querySelector('.content-left__button');

var rightElems = [
	document.querySelector('.content-right .title'),
	document.querySelector('.content-right .text'),
	document.querySelector('.content-right .button')
];

var swiperPagination = document.querySelector('.swiper-pagination');
var video = document.querySelector('.video');

// разбить текст логотипа на символы
let logo = document.querySelectorAll(".logo");
[].forEach.call(logo, function(el) {
	el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
});
// вернуть символы логотипа
var elemsLogo = document.querySelectorAll('.logo .letter');

var tl = new TimelineMax({paused: false});
var easeDefault = 'Power0.easeNone';
var easePower = 'Power1.easeOut';
var easePowerCustom = 'Power1.easeInOut';

var timeAnimate = 1;

tl
	.set(rightElems, {
		transform: 'translate(-15vh, 100vh) rotate(45deg)',
		transformOrigin: '0% 0%',
		autoAlpha: 0
	})

	.add('start')
	.staggerFromTo(elemsLogo, timeAnimate, {autoAlpha: 0}, {autoAlpha: 1, ease: easeDefault}, 0.1)
	.staggerFromTo(menuItems, timeAnimate, {autoAlpha: 0}, {autoAlpha: 1, ease: easeDefault}, 0.2, 'start+=0.2')
	.from(swiperPagination, timeAnimate, {scale: 0, ease: easeDefault}, 'start+=0.2')
	.from(mainTitle, timeAnimate, {width: 0, ease: easeDefault}, 'start+=0.3')
	.from(leftButton, timeAnimate, {scale: 0, ease: easeDefault}, 'start+=0.4')
	
	.add('startBrain')
	.to(bgOfBrain, timeAnimate, {scale: 1, ease: easeDefault})
	.to(brainHimself, timeAnimate, {scale: 1, ease: easeDefault}, 'startBrain+='+timeAnimate/3)
	.to(bgOfBrainBig, timeAnimate, {scale: 1, ease: easeDefault}, 'startBrain+='+timeAnimate/3)
	.to(gearsOfBrain, timeAnimate * 2.5, {rotation: '225deg', transformOrigin: '50% 50%', ease: easePower}, 'startBrain+='+timeAnimate/2)
	.to(gearsOfBrain, timeAnimate * 5, {rotation: '-135deg', transformOrigin: '50% 50%', ease: easePowerCustom})
	.to(bgCurtain, timeAnimate * 2, {x: '-52%', ease: easePower}, 'startBrain+='+timeAnimate/3)
	
	.add('brainIsleave')
	.to(brainHimself, timeAnimate, {scale: 0, ease: easeDefault})
	.to(bgOfBrain, timeAnimate / 2, {scale: 3, ease: easeDefault}, 'brainIsleave')
	.set(bgOfBrainBig, {display: 'none'})
	.set(bgOfBrain, {
		borderRadius: '0',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		transform: 'none'
	})

	.set(video, {className: '+=video_inCercle'})
	.add('startLeftCircles')
	.to(bgCircleBig, timeAnimate*2, {scale: 1, ease: easeDefault}, 'brainIsleave')
	.to(bgCircleMedium, timeAnimate*3, {scale: 1, ease: easeDefault}, 'startLeftCircles')
	.to(video, timeAnimate*4, {scale: 1, ease: easeDefault}, 'startLeftCircles')
	.staggerTo(rightElems, timeAnimate, {x: 0, y: 0, rotation: 0, autoAlpha: 1}, 0.3)


