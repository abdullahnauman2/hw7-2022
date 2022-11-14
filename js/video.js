var video;
var play;
var pause;
var slowDown;
var speedUp;
var mute;
var volumeSlider;
var useStyled;
var useOriginal;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('.video');
	play = document.querySelector('#play');
	pause = document.querySelector('#pause');
	slowDown = document.querySelector('#slower');
	speedUp = document.querySelector('#faster');
	skipAhead = document.querySelector('#skip');
	mute = document.querySelector('#mute');
	volumeSlider = document.querySelector('#slider');
	useStyled = document.querySelector('#vintage');
	useOriginal = document.querySelector('#orig');

	video.setAttribute("autoplay", "false");
	video.removeAttribute("loop");
	setUpEvents();
});

function setUpEvents() { 
	play.addEventListener("click", function () {
		video.play();
		volume.textContent = video.volume * 100 + "%";
	});

	pause.addEventListener("click", function () {
		video.pause();
	});

	slowDown.addEventListener("click", function () {
		video.playbackRate *= 0.95;
		console.log("New speed " + video.playbackRate);
	});

	speedUp.addEventListener("click", function () {
		video.playbackRate /= 0.95;
		console.log("New speed " + video.playbackRate);
	});

	skipAhead.addEventListener("click", function () {
		console.log("Original location " + video.currentTime)
		if ((video.duration - video.currentTime) <= 15) {
			video.currentTime = 0;
		} else {
			video.currentTime += 15;
		}
		console.log("New location " + video.currentTime)
	});

	mute.addEventListener("click", function () {
		if (video.muted) { 
			video.muted = false;
			mute.textContent = "Mute";
		} else { 
			video.muted = true;
			mute.textContent = "Unmute";
		}
	});

	volumeSlider.addEventListener("input", function () {
		video.volume = volumeSlider.value / 100;
		volume.textContent = (video.volume * 100) + "%";
		console.log(video.volume);
	});

	useStyled.addEventListener("click", function() {
		video.className = "oldSchool";
	});
	
	useOriginal.addEventListener("click", function() {
		video.className = "video";
	});
	
}



