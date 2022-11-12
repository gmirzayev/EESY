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

//get button that will take picture
const captureButton = document.getElementById('capture-btn')
const smallPictureWidth = 160;
const smallPictureHeight = 120;
//take picture on click 
let picture;
const frame1 = document.getElementById('frame-1');
captureButton.addEventListener('click', (e) => {
    picture = new Picture(stream, frame1, videoWidth, videoHeight, smallPictureWidth, smallPictureHeight);
    picture.takePicture();
})

//get button that will take multiple pictures
const multipleCaptureButton = document.getElementById('multi-capture-btn');

//get all canvas elements with class of small-frame
let frames = document.getElementsByClassName('small-frame');
const offpageCanvasArray = document.getElementsByClassName('offpage-frame');
let smallPictureArray = [];
multipleCaptureButton.addEventListener('click', (e) => {
    //delay function that returns promise after x ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //take as many photos as there are canvases on a delay of x ms
    async function takePhotos() {
        for(let i = 0; i < frames.length; i++) {
            await(delay(2000));
            let smallPicture = new Picture(stream, frames[i], videoWidth, videoHeight, smallPictureWidth, smallPictureHeight);
            smallPicture.takePicture();
            smallPicture.offpageCopy(offpageCanvasArray[i]);
            smallPictureArray.push(smallPicture);
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
