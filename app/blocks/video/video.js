var mq = window.matchMedia( '(min-width: 768px)' );

if(mq.matches) {

	var video = document.querySelector('.video__clip');
	video.currentTime += 3;
	video.autoplay = true;
	video.poster = '../video.png'

	setTimeout(function() {
		video.pause();
	}, 16500);

}