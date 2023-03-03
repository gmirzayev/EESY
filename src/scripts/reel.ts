class Reel {

    offpageCanvasArray: HTMLCollection;
    reelFrames: HTMLCollection;
    offpageCanvasWidth: number;
    offpageCanvasHeight: number;

    constructor (offpageCanvasArray, offpageCanvasWidth, offpageCanvasHeight) {
        this.offpageCanvasArray = offpageCanvasArray;
        this.reelFrames = document.getElementsByClassName('reel-frame');
        this.offpageCanvasWidth = offpageCanvasWidth;
        this.offpageCanvasHeight = offpageCanvasHeight;
    }

    generateReel() {
        for(let i = 0; i < this.offpageCanvasArray.length; i++) {
            const reelFrame = <HTMLCanvasElement>this.reelFrames[i];
            const offpageFrame = <HTMLCanvasElement>this.offpageCanvasArray[i];
            reelFrame.width = 300;
            reelFrame.height = 225;
            let canvasContext = reelFrame.getContext('2d');
            canvasContext.drawImage(offpageFrame, 0, 0, this.offpageCanvasWidth, this.offpageCanvasHeight, 0, 0, 300, 225);
        }
    }
}

export default Reel;