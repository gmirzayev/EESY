class Picture {
    constructor (video, canvasFrame) {
        this.video = video;
        this.canvasFrame = canvasFrame;
        this.takePicture();
    }

    takePicture () {
        this.canvasFrame.width = 160;
        this.canvasFrame.height = 120;
        let canvasContext = this.canvasFrame.getContext('2d');
        canvasContext.drawImage(this.video, 0, 0, 640, 480, 0, 0, 160, 120);
    }
}

export default Picture;