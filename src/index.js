import Video from "./scripts/video";
import Picture from "./scripts/picture";
import Reel from "./scripts/reel";
import Hitbox from "./scripts/hitbox";
import { setPlaceholders } from "./scripts/utils";

//set placeholder images
setPlaceholders();

//get button that will start video
const startVideoButton = document.getElementById('start-video-btn');
const videoWidth = 610;
const videoHeight = 469;

//start video on click
// const video = new Video(videoWidth, videoHeight);
// const stream = document.getElementById('video');
// startVideoButton.addEventListener('click', (e) => {
//     if(video.playing === true) {
//         video.stopVideo();
//     } else {
//         video.startVideo();
//     }
// })

//get button that will take multiple pictures
const multipleCaptureButton = document.getElementById('multi-capture-btn');

const pictureCount = document.getElementById('picture-count');
const countdownTimer = document.getElementById('countdown');

const flashElement = document.getElementById('flash');

//get all canvas elements with class of small-frame
const offpageCanvasArray = document.getElementsByClassName('offpage-frame');
const textarea = document.getElementById('caption');

const video = new Video(videoWidth, videoHeight);
const stream = document.getElementById('video');

const reelDiv = document.getElementById('reel');

if(video.playing != true) {
    video.startVideo();
}

multipleCaptureButton.addEventListener('click', (e) => {
    //delay function that returns promise after x ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //take as many photos as there are canvases on a delay of x ms
    async function takePhotos() {
        reelDiv.style.visibility = "hidden";
        stream.style.visibility = "visible";
        textarea.style.display = "none";
        multipleCaptureButton.disabled = true;

        let pCount = 1;
        pictureCount.innerText = `${pCount} / 4`;
        
        for(let i = 0; i < offpageCanvasArray.length; i++) {
            flashElement.style.visibility = 'hidden';
            flashElement.classList.remove('flash');
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
        textarea.style.display = 'block';
        countdownTimer.innerText = "";
        pictureCount.innerText = "";

        flashElement.style.visibility = 'hidden';
        flashElement.classList.remove('flash');
        reelDiv.style.visibility = "visible";
        reelDiv.style.zIndex = 0;
        stream.style.visibility = "hidden";
        multipleCaptureButton.disabled = false;

        createReel();
    }
    if(video.playing) takePhotos();
})



//create reel - stop video first, then fill canvases 
const createReel = function() {
    let reel = new Reel(offpageCanvasArray, videoWidth, videoHeight);
    reel.generateReel();
}

const frameList = document.getElementById('frame-list');
const backgroundCanvas = document.getElementById('background-canvas');
// const frame1 = document.getElementById('frame-list').firstChild;
let selectedFrame = document.getElementById('start-frame');
backgroundCanvas.width = 800;
backgroundCanvas.height = 650;
//load image and set background-canvas to image
let canvasContext = backgroundCanvas.getContext('2d');
// canvasContext.imageSmoothingEnabled = false;
let backgroundImage = new Image();
backgroundImage.src = `./assets/frame_${selectedFrame.dataset.frame}.png`;
backgroundImage.onload = function(){
    canvasContext.drawImage(backgroundImage, 0, 0, 800, 650);
}

frameList.addEventListener('click', (e) => {
    //check if clicked element is an image
    if(e.target.tagName === 'IMG') {
        if(selectedFrame) {
            selectedFrame.classList.remove('selected-frame');
        }
        e.target.classList.add('selected-frame');
        selectedFrame = e.target;

        backgroundCanvas.width = 800;
        backgroundCanvas.height = 650;
        //load image and set background-canvas to image
        let canvasContext = backgroundCanvas.getContext('2d');
        // canvasContext.imageSmoothingEnabled = false;
        let backgroundImage = new Image();
        backgroundImage.src = `./assets/frame_${e.target.dataset.frame}.png`;
        backgroundImage.onload = function(){
            canvasContext.drawImage(backgroundImage, 0, 0, 800, 650);
        }
    }
});


const stickerList = document.getElementById('sticker-list');
const stickerCanvas = document.getElementById('sticker-canvas');

stickerCanvas.width = 800;
stickerCanvas.height = 525;

const stickerArray = [];

stickerList.addEventListener('click', (e) => {
    if(e.target.parentNode.tagName === 'LI') {
        let stickerType = e.target.dataset.type;
        let hitbox = new Hitbox(stickerCanvas, stickerType);
        stickerArray.push(hitbox);
    }
});

let dragging;

stickerCanvas.addEventListener('mousedown', (e) => {
    let pos = getMousePos(stickerCanvas, e);
    for(let i = 0; i < stickerArray.length; i++) {
        if(stickerArray[i].hit(pos.x, pos.y)) {
            let hitbox = stickerArray[i];
            const context = stickerCanvas.getContext('2d');
            dragging = ((e) => {
                pos = getMousePos(stickerCanvas, e);
                hitbox.posX = pos.x;
                hitbox.posY = pos.y;
                context.clearRect(0, 0, stickerCanvas.width, stickerCanvas.height);
                for(let j = 0; j < stickerArray.length; j++) {
                    stickerArray[j].drawSticker();
                }
            });
            stickerCanvas.addEventListener('mousemove', dragging);
            break;
        }
    }
});

stickerCanvas.addEventListener('mouseup', (e) => {
    stickerCanvas.removeEventListener('mousemove', dragging);
});

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

const textColorSelect = document.getElementById('text-color-select');
const textFontSelect = document.getElementById('text-font-select');

textColorSelect.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        textarea.style.color = e.target.dataset.color;
    }
});

textFontSelect.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        textarea.style.fontFamily = e.target.dataset.font;
    }
});


// const downloadButton = document.getElementById("create-download-btn");
// const reelFrames = document.getElementsByClassName('reel-frame');

// function createDownloadable(backgroundCanvas, stickerCanvas, reelCanvasArray, downloadButton) {
//     let finalCanvas = document.getElementById('offpageDownload');
//     finalCanvas.width = 740;
//     finalCanvas.height = 650;
//     let finalContext = finalCanvas.getContext('2d');
//     finalContext.drawImage(backgroundCanvas, 0, 0);

//     let image = finalCanvas.toDataURL("image/png");
//     downloadButton.href = image;
// }

// const downloadLink = document.getElementById('download');

// downloadButton.addEventListener("click", (e) => {
//     createDownloadable(backgroundCanvas, stickerCanvas, reelFrames, downloadLink);
// })