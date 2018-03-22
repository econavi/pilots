// получаем ссылку с href из адресной строки
var elem = document.querySelectorAll('.main-menu__link');

for(var i = 0; i < elem.length; i++) {
	if(elem[i].getAttribute('href') == window.location.pathname) {
		elem[i].classList.add('main-menu__link_active');
	}
}