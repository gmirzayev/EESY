class Picture {

    video: HTMLVideoElement;
    canvasFrame: HTMLCanvasElement;
    videoWidth: number;
    videoHeight: number;

    constructor (video, canvasFrame, videoWidth, videoHeight) {
        this.video = video;
        this.canvasFrame = canvasFrame;
        this.videoWidth = videoWidth;
        this.videoHeight = videoHeight;
    }

    offpageCopy(canvas) {
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        let canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(this.video, 0, 0, this.videoWidth, this.videoHeight);
    }
}

export default Picture;