class Video {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
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
        let video = document.getElementById('video');
        video.srcObject = stream;
    }

    error (error) {
        console.log(error);
    }

    stopVideo () {
        let video = document.getElementById('video');
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        video.srcObject = null;
        this.playing = false;
    }
}

export default Video;