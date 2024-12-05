// array of videos paths
const videos = [
    "videos/rain1.mp4",
    "videos/rain2.mp4",
    "videos/rain3.mp4",
    "videos/rain4.mp4"
];

//get the video and source elements
const videoElement = document.getElementById("bgvid");
const sourceElement = document.getElementById("videoSource");

//select a random video
const randomVideo = videos[Math.floor(Math.random() * videos.length)];

// Set the random video as the source
sourceElement.src = randomVideo;

// Load the new video
videoElement.load();

// change text on hover
document.addEventListener("DOMContentLoaded", function() {
    const homepageTitle = document.getElementById("homepageTitle");

    homepageTitle.addEventListener("mouseenter", function() {
        homepageTitle.textContent = "Home";
    });

    homepageTitle.addEventListener("mouseleave", function() {
        homepageTitle.textContent = "NJT Designs";
    });
});