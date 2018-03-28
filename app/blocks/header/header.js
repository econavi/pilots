var menuSwitcher = getElem('.header__menu-switcher');
var menuSwitcherIcon = getElem('.menu-switcher');
var menu = getElem('.header__menu');
var logo = getElem('.header__logo');

menuSwitcher.addEventListener('click', function(e) {
	if(!menu.style.display) {
		menuSwitcherIcon.classList.add('menu-switcher_isOpend');
		showElem(menu);
	}
	else {
		menuSwitcherIcon.classList.remove('menu-switcher_isOpend');
		hideElem(menu);
	};
});

function showElem(elem) {
	elem.style.display = 'block';
	elem.classList.add('header__menu_show-start');
	
	raf(function () {
		elem.classList.add('header__menu_isShowed');
		elem.classList.remove('header__menu_show-start');
	});

	elem.addEventListener('animationend', handler);
	
	function handler() {
		elem.classList.remove('header__menu_isShowed');
		elem.removeEventListener('animationend', handler);
	}
	
}

function hideElem(elem) {
	elem.classList.add('header__menu_isHidden');

	elem.addEventListener('animationend', handler);

	function handler() {
		elem.classList.remove('header__menu_isHidden');
		elem.style.display = '';
		elem.removeEventListener('animationend', handler);
	}
}

function raf(fn) {
	window.requestAnimationFrame(function(){
		window.requestAnimationFrame(function(){
			fn();
		});
	});
}

function getElem(elemClass) {
	return document.querySelector(elemClass);
}