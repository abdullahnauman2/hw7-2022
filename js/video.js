var video = document.querySelector('.video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.setAttribute("autoplay", "false")
	video.removeAttribute("loop")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").textContent = video.volume * 100 + "%";
});

document.querySelector('#pause').addEventListener("click", function () {
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function () {
	video.playbackRate *= 0.95;
	console.log("New speed " + video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function () {
	video.playbackRate /= 0.95;
	console.log("New speed " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function () {
	console.log("Original location " + video.currentTime)
	if ((video.duration - video.currentTime) <= 15) {
		video.currentTime = 0;
	} else {
		video.currentTime += 15;
	}
	console.log("New location " + video.currentTime)
});

document.querySelector('#mute').addEventListener("click", function () {
	if (video.muted) { 
		video.muted = false;
		document.querySelector('#mute').textContent = "Mute";
	} else { 
		video.muted = true;
		document.querySelector('#mute').textContent = "Unmute";
	}
});

document.querySelector('#slider').addEventListener("input", function () {
	video.volume = document.querySelector('#slider').value / 100;
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
	console.log(video.volume);
});

document.querySelector('#vintage').addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector('#orig').addEventListener("click", function() {
	video.className = "video";
});
