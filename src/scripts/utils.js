export function setPlaceholders() {
    const reelFrames = document.getElementsByClassName('reel-frame');
    for(let i = 0; i < reelFrames.length; i++) {
        const frame = reelFrames[i];
        frame.width = 300;
        frame.height = 225;

        const canvasContext = frame.getContext('2d');
        const placeholderImage = new Image();

        placeholderImage.src = `./assets/Placeholder_${i+1}.jpg`;
        placeholderImage.onload = function(){
            canvasContext.drawImage(placeholderImage, 0, 0, 300, 225);
        }
    }
}
