var video = document.querySelector('.video__clip');
video.currentTime += 3;
video.autoplay = false;
video.poster = '../video.png'

setTimeout(function() {
	video.pause();
}, 17000);
