import Video from "./scripts/video";
import Picture from "./scripts/picture";
import Reel from "./scripts/reel";
import initialize from "./scripts/initialize";

initialize();

//set placeholder images
const reelFrames = document.getElementsByClassName('reel-frame');


//get button that will start video
const startVideoButton = document.getElementById('start-video-btn');
const videoWidth = 610;
const videoHeight = 469;

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

const flashElement = document.getElementById('flash');

//get button that will take multiple pictures
const multipleCaptureButton = document.getElementById('multi-capture-btn');
const pictureCount = document.getElementById('picture-count');
const countdownTimer = document.getElementById('countdown');

//get all canvas elements with class of small-frame
const offpageCanvasArray = document.getElementsByClassName('offpage-frame');
multipleCaptureButton.addEventListener('click', (e) => {
    //delay function that returns promise after x ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //take as many photos as there are canvases on a delay of x ms
    async function takePhotos() {
        let pCount = 1;
        
        pictureCount.innerText = `${pCount} / 4`;
        for(let i = 0; i < offpageCanvasArray.length; i++) {
            // if(flashElement.classList.contains('flash')) {
            //     setTimeout(() => {
                    flashElement.style.visibility = 'hidden';
                    flashElement.classList.remove('flash');
            //     }, 900)
            // }
            let count = 3;
            countdownTimer.innerText = count;
            let timer = setInterval(() => {
                count --;
                if(count < 1) count = 1;
                countdownTimer.innerText = count;
            }, 1000);

            await(delay(3500));
            flashElement.style.visibility = 'visible';
            flashElement.classList.add('flash');
            await(delay(500));

            clearInterval(timer);
            pCount++;
            pictureCount.innerText = `${pCount} / 4`;


            let offpageHolder = new Picture(stream, frames[i], videoWidth, videoHeight);
            offpageHolder.offpageCopy(offpageCanvasArray[i]);
        }
        countdownTimer.innerText = "";
        pictureCount.innerText = "";
        flashElement.style.visibility = 'hidden';
        flashElement.classList.remove('flash');
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
