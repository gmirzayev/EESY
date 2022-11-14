function initialize() {
    const reelFrames = document.getElementsByClassName('reel-frame');
    for(let i = 0; i < reelFrames.length; i++) {
        reelFrames[i].width = 300;
        reelFrames[i].height = 225;
        let canvasContext = reelFrames[i].getContext('2d');
        // canvasContext.imageSmoothingEnabled = false;
        let placeholderImage = new Image();
        placeholderImage.src = `./assets/Placeholder_${i+1}.jpg`;
        placeholderImage.onload = function(){
            canvasContext.drawImage(placeholderImage, 0, 0, 300, 225);
        }
    }
}

export default initialize;