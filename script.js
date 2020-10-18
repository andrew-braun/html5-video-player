const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

// Play/pause video functions
const toggleVideoStatus = () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const updatePlayIcon = () => {
	if (video.paused) {
		play.innerHTML = "<i class='fas fa-play-circle fa-3x'></i>";
	} else {
		play.innerHTML = "<i class='fa fa-pause-circle fa-3x'></i>";
	}
};

// Update progress and timestamp
const updateProgress = () => {
	progress.value = (video.currentTime / video.duration) * 100;

	// Minutes
	let minutes = Math.floor(video.currentTime / 60);
	if (minutes < 10) {
		minutes = "0" + String(minutes);
	}

	// Seconds
	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		seconds = "0" + String(seconds);
	}

	timestamp.innerHTML = `${minutes}:${seconds}`;
};

// Update displayed time with progress
const setVideoProgress = () => {
	video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop video
const stopVideo = () => {
	video.currentTime = 0;
	video.pause();
};

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
