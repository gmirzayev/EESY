import Video from "./scripts/video";
import Picture from "./scripts/picture";
import Reel from "./scripts/reel";
import Hitbox from "./scripts/hitbox";
import { setPlaceholders } from "./scripts/utils";

//set placeholder images
setPlaceholders();  

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal-btn");
const openModalImage = <HTMLImageElement>document.getElementById("open-img");
const closeModalButton = document.getElementById("close-modal-btn");

openModalButton.addEventListener("click", (e) => {
    modal.style.display = "block";
});

openModalButton.addEventListener("mouseover", (e) => {
    openModalImage.src = "./assets/Info_pink.png";
});

openModalButton.addEventListener("mouseleave", (e) => {
    openModalImage.src = "./assets/Info_blue.png";
});

closeModalButton.addEventListener("click", (e) => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

//get button that will start video
const videoWidth = 610;
const videoHeight = 469;

//get button that will take multiple pictures
const multipleCaptureButton = <HTMLButtonElement>document.getElementById('multi-capture-btn');

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

textarea.style.display = "none";

multipleCaptureButton.addEventListener('click', (e) => {
    //delay function that returns promise after x ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //take as many photos as there are canvases on a delay of x ms
    async function takePhotos() {
        reelDiv.style.visibility = "hidden";
        stream.style.visibility = "visible";
        multipleCaptureButton.disabled = true;
        textarea.style.display = "none";
        let pCount = 1;
        pictureCount.innerText = `${pCount} / 4`;
        
        for(let i = 0; i < offpageCanvasArray.length; i++) {
            flashElement.style.visibility = 'hidden';
            flashElement.classList.remove('flash');
            let count = 3;
            countdownTimer.innerText = count.toString();
            let timer = setInterval(() => {
                count --;
                if(count < 1) count = 1;
                countdownTimer.innerText = count.toString();
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
        reelDiv.style.zIndex = "0";
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
const backgroundCanvas = <HTMLCanvasElement>document.getElementById('background-canvas');
// const frame1 = document.getElementById('frame-list').firstChild;
let selectedFrame = <HTMLImageElement>document.getElementById('start-frame');
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

frameList.addEventListener('click', (e: Event) => {
    //check if clicked element is an image
    const target = <HTMLImageElement>e.target;
    if(target.tagName === 'IMG') {
        if(selectedFrame) {
            selectedFrame.classList.remove('selected-frame');
        }
        target.classList.add('selected-frame');
        selectedFrame = target;

        backgroundCanvas.width = 800;
        backgroundCanvas.height = 650;
        //load image and set background-canvas to image
        let canvasContext = backgroundCanvas.getContext('2d');
        // canvasContext.imageSmoothingEnabled = false;
        let backgroundImage = new Image();
        backgroundImage.src = `./assets/frame_${target.dataset.frame}.png`;
        backgroundImage.onload = function(){
            canvasContext.drawImage(backgroundImage, 0, 0, 800, 650);
        }
    }
});


const stickerList = document.getElementById('sticker-list');
const stickerCanvas = <HTMLCanvasElement>document.getElementById('sticker-canvas');

stickerCanvas.width = 800;
stickerCanvas.height = 525;

const stickerArray = [];

stickerList.addEventListener('click', (e: Event) => {
    const target = <HTMLDivElement>e.target;
    const parentNode = <HTMLDivElement>target.parentNode;
    if(parentNode.tagName === 'LI') {
        let stickerType = target.dataset.type;
        let hitbox = new Hitbox(stickerCanvas, stickerType);
        stickerArray.push(hitbox);
    }
});

let dragging;

stickerCanvas.addEventListener('mousedown', (e: Event) => {
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

const textColorSelect = <HTMLLIElement>document.getElementById('text-color-select');
const textFontSelect = document.getElementById('text-font-select');

let selectedColor = <HTMLLIElement>document.getElementById('selected-text-color');
textColorSelect.addEventListener('click', (e: Event) => {
    const target = <HTMLLIElement>e.target;
    if(target.tagName === 'LI') {
        textarea.style.color = target.dataset.color;
    }
    if(selectedColor) {
        selectedColor.classList.remove('selected-text-color');
    }
    target.classList.add('selected-text-color');
    selectedColor = target;
});

let selectedFont = <HTMLLIElement>document.getElementById('selected-text-font');
textFontSelect.addEventListener('click', (e: Event) => {
    const target = <HTMLLIElement>e.target;
    if(target.tagName === 'LI') {
        textarea.style.fontFamily = target.dataset.font;
        if(target.dataset.font === 'Sunspot') {
            textarea.style.fontSize = '36px';
            textarea.style.lineHeight = '0.9em';
        } else if (target.dataset.font === 'Pacifico') {
            textarea.style.fontSize = '32px';
            textarea.style.lineHeight = '1.3em';
        } else {
            textarea.style.fontSize = '28px';
            textarea.style.lineHeight = '1.3em';
        }
    }
    if(selectedFont) {
        selectedFont.classList.remove('selected-text-font');
    }
    target.classList.add('selected-text-font');
    selectedFont = target;
});

const githubLink = <HTMLLinkElement>document.getElementById('github-link');
const linkedinLink = <HTMLLinkElement>document.getElementById('linkedin-link');
const githubImage = <HTMLImageElement>document.getElementById('github-logo');
const linkedinImage = <HTMLImageElement>document.getElementById('linkedin-logo');

githubLink.addEventListener("mouseover", (e) => {
    githubImage.src = "./assets/github_pink.svg";
});

githubLink.addEventListener("mouseleave", (e) => {
    githubImage.src = "./assets/Github_Icon.svg";
});

linkedinLink.addEventListener("mouseover", (e) => {
    linkedinImage.src = "./assets/linked_in_pink.svg";
});

linkedinLink.addEventListener("mouseleave", (e) => {
    linkedinImage.src = "./assets/Linkedin_Icon.svg";
});