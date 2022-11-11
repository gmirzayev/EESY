import Video from "./scripts/video";
import Picture from "./scripts/picture";

//get button that will start video
const startVideoButton = document.getElementById('start-video-btn');

//start video on click
let video;
let stream;
startVideoButton.addEventListener('click', (e) => {
    video = new Video();
    stream = document.getElementById('video');
})

//get button that will take picture
const captureButton = document.getElementById('capture-btn')

//take picture on click 
let picture;
let frame1 = document.getElementById('frame-1');
captureButton.addEventListener('click', (e) => {
    picture = new Picture(stream, frame1);
})

const multipleCaptureButton = document.getElementById('multi-capture-btn');

let frames = document.getElementsByClassName('small-frame');
multipleCaptureButton.addEventListener('click', (e) => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function takePhotos() {
        for(let i = 0; i < frames.length; i++) {
            await(delay(2000));
            picture = new Picture(stream, frames[i]);
        }  
    }

    takePhotos(); 

})
