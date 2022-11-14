class Reel {
    constructor (offpageCanvasArray, offpageCanvasWidth, offpageCanvasHeight) {
        this.offpageCanvasArray = offpageCanvasArray;
        this.reelFrames = document.getElementsByClassName('reel-frame');
        this.offpageCanvasWidth = offpageCanvasWidth;
        this.offpageCanvasHeight = offpageCanvasHeight;
    }

    generateReel() {
        for(let i = 0; i < this.offpageCanvasArray.length; i++) {
            this.reelFrames[i].width = 300;
            this.reelFrames[i].height = 225;
            let canvasContext = this.reelFrames[i].getContext('2d');
            canvasContext.drawImage(this.offpageCanvasArray[i], 0, 0, this.offpageCanvasWidth, this.offpageCanvasHeight, 0, 0, 300, 225);
        }
    }
}

export default Reel;