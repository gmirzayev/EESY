class Video {
    constructor () {
        this.startVideo();
    }

    startVideo () {
        const constraints = {
            audio: false,
            video: { width: 640, height: 480 }
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(success)
            .catch(error);

        function success (stream) {
            let video = document.getElementById('video');
            video.srcObject = stream;
        }
            
        function error (error) {
            console.log(error);
        }
    }
}

export default Video;