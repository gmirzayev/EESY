class Video {

    width: number;
    height: number;
    playing: boolean;
    videoElement: HTMLVideoElement;

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.videoElement = <HTMLVideoElement>document.getElementById('video');
    }

    startVideo () {
        const constraints = {
            audio: false,
            video: { width: this.width, height: this.height }
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(this.success.bind(this))
            .catch(this.error)
    }

    success (stream) {
        this.playing = true;
        this.videoElement.srcObject = stream;
    }

    error (error) {
        console.log(error);
    }

    stopVideo () {
        const stream = <MediaStream>this.videoElement.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        this.videoElement.srcObject = null;
        this.playing = false;
    }
}

export default Video;