import Video from "./scripts/video";

document.addEventListener("DOMContentLoaded", () => {
    const startVideoButton = document.getElementById('start-video');
    // const videoWindow = document.getElementById('video');
    let video;
    startVideoButton.addEventListener('click', (e) => {
        video = new Video();
    })
})