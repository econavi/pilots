var video = document.querySelector('.video__clip');
video.currentTime += 3;
video.autoplay = true;
video.poster = '../video.png'

setTimeout(function() {
	video.pause();
}, 17000);
