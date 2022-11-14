import Video from "./scripts/video";
import Picture from "./scripts/picture";
import Reel from "./scripts/reel";

//get button that will start video
const startVideoButton = document.getElementById('start-video-btn');
const videoWidth = 800;
const videoHeight = 600;

//start video on click
const video = new Video(videoWidth, videoHeight);
let stream;
startVideoButton.addEventListener('click', (e) => {
    stream = document.getElementById('video');
    if(video.playing === true) {
        video.stopVideo();
    } else {
        video.startVideo();
    }
})

const smallPictureWidth = 160;
const smallPictureHeight = 120;

//get button that will take multiple pictures
const multipleCaptureButton = document.getElementById('multi-capture-btn');

//get all canvas elements with class of small-frame
const offpageCanvasArray = document.getElementsByClassName('offpage-frame');
multipleCaptureButton.addEventListener('click', (e) => {
    //delay function that returns promise after x ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //take as many photos as there are canvases on a delay of x ms
    async function takePhotos() {
        for(let i = 0; i < offpageCanvasArray.length; i++) {
            await(delay(2000));
            let offpageHolder = new Picture(stream, frames[i], videoWidth, videoHeight, smallPictureWidth, smallPictureHeight);
            offpageHolder.offpageCopy(offpageCanvasArray[i]);
        }
        createReel();
    }
    takePhotos(); 
})

const createReel = function() {
    video.stopVideo();
    let reel = new Reel(offpageCanvasArray, videoWidth, videoHeight);
    reel.generateReel();
    console.log("Done with photos, show reel");
}
