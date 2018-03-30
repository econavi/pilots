import Splitter from 'split-html-to-chars';

// Animation

var bgLayer = document.querySelector('.bg-layer');
var btain = document.querySelector('.brain');
var btainAnimateElems = document.querySelectorAll('.brain__animate-element');
var menuItems = document.querySelectorAll('.main-menu__item');
var mainTitle = document.querySelector('.title-main');
var leftButton = document.querySelector('.main-content-left__button');

var rightElems = [
	document.querySelector('.main-content-right .title'),
	document.querySelector('.main-content-right .text'),
	document.querySelector('.main-content-right .button')
];


// разбить текст логотипа на элементы
let logo = document.querySelectorAll(".logo");
[].forEach.call(logo, function(el) {
	el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
});
// вернуть элементы логотипа
var elemsLogo = document.querySelectorAll('.logo .letter');

var tl = new TimelineMax({paused: true});

// tl
// 	.set(rightElems, {
// 		transform: 'translate(-15vh, 100vh) rotate(45deg)',
// 		transformOrigin: '0% 0%'
// 	})
// 	.to(bgLayer, 1, {x: '54px'})
// 	.to(btainAnimateElems, 1, {rotation: '360deg', transformOrigin: '50% 50%'})
// 	.to(btain, 1, {scale: 0})
// 	.staggerFromTo(menuItems, 1, {autoAlpha: 0}, {autoAlpha: 1}, 0.3)
// 	.staggerFromTo(elemsLogo, 1, {autoAlpha: 0}, {autoAlpha: 1}, 0.3)
// 	.from(mainTitle, 1, {width: 0})
// 	.from(leftButton, 1, {scale: 0})
// 	.staggerTo(rightElems, 2, {x: 0, y: 0, rotation: 0}, 0.3)


