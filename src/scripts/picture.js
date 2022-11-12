class Picture {
    constructor (video, canvasFrame, videoWidth, videoHeight, width, height) {
        this.video = video;
        this.canvasFrame = canvasFrame;
        this.videoWidth = videoWidth;
        this.videoHeight = videoHeight;
        this.width = width;
        this.height = height;
    }

    takePicture () {
        this.canvasFrame.width = 160;
        this.canvasFrame.height = 120;
        let canvasContext = this.canvasFrame.getContext('2d');
        canvasContext.drawImage(this.video, 0, 0, this.videoWidth, this.videoHeight, 0, 0, this.width, this.height);
    }

    offpageCopy(canvas) {
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        let canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(this.video, 0, 0, this.videoWidth, this.videoHeight);
    }
}

export default Picture;