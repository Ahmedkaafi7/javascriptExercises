const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

const videos = [
    { title: "Video One", src: "video1.mp4" },
    { title: "Video Two", src: "video2.mp4" },
    { title: "Video Three", src: "video3.mp4" },
    { title: "Video Four", src: "video4.mp4" }
];

let videoIndex = 0;
let isPlaying = false;


// Load Video
function loadVideo(videoData) {
    title.textContent = videoData.title;
    video.src = videoData.src;
}

loadVideo(videos[videoIndex]);


// Play
function playVideo() {
    playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
    video.play();
    isPlaying = true;
}

// Pause
function pauseVideo() {
    playBtn.querySelector('i').classList.replace('fa-pause','fa-play');
    video.pause();
    isPlaying = false;
}

// Toggle
playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

// Prev
function prevVideo() {
    videoIndex--;
    if (videoIndex < 0) videoIndex = videos.length - 1;
    loadVideo(videos[videoIndex]);
    playVideo();
}

// Next
function nextVideo() {
    videoIndex++;
    if (videoIndex > videos.length - 1) videoIndex = 0;
    loadVideo(videos[videoIndex]);
    playVideo();
}

prevBtn.addEventListener('click', prevVideo);
nextBtn.addEventListener('click', nextVideo);


// Update Progress
video.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;

    if (!duration) return;

    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;

    const durMin = Math.floor(duration / 60);
    const durSec = Math.floor(duration % 60).toString().padStart(2, '0');
    durationEl.textContent = `${durMin}:${durSec}`;

    const curMin = Math.floor(currentTime / 60);
    const curSec = Math.floor(currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${curMin}:${curSec}`;
});


// Click Seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;

    video.currentTime = (clickX / width) * duration;
});


// Volume
volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
});


// Speed
speedSelect.addEventListener('change', (e) => {
    video.playbackRate = parseFloat(e.target.value);
});


// Auto Next
video.addEventListener('ended', nextVideo);