## EESY
<a href="https://gmirzayev.github.io/EESY/">EESY</a> is an interactive webapp that allows a user to take photos and turn them into photo booth style reels. EESY uses the user's webcam to stream live video and to take photos from that feed. Once the photos are taken, the user can customize their photo reel with a variety of colors and text. Reels are the end product of EESY and will have all of the user's photos formatted in an attractive layout.

## Technologies, Libraries, APIs
Vanilla JavaScript: for handling buttons and timers.
<br>
Webpack: compiling stylesheets and JS script files.
<br>
Mediastream API: accessing webcam video.
<br>
Canvas API: capturing frames from the video stream and decorating reels.

## Functionality

<img src="https://github.com/gmirzayev/EESY/blob/a32a7f4416f8afaa019f3f186142f65379de2a96/assets/modal.gif">

With EESY, users will be able to:
<ol>
  <li>Take x number of photos on an automated timer.</li>
  <li>See the photos they have taken in a grid layout.</li>
  <li>Decorate their reels with colors and text.</li>
</ol>

To implement draggable stickers, two classes were used. One is a hitbox class that acts as the mouse collision detection.

```js
class Hitbox {
    constructor(canvas, stickerType) {
        this.canvas = canvas;
        this.width = 75;
        this.height = 75;
        this.posX = 0;
        this.posY = 0;
        this.sticker = new Sticker(this.canvas, this.posX, this.posY, stickerType);
        this.drawSticker();
    }

    drawSticker() {
        this.sticker.drawSticker(this.posX, this.posY);
    }

    hit(mouseX, mouseY) {
        let rightBound = this.posX + this.width;
        let bottomBound = this.posY + this.height;
        if(mouseX > this.posX && mouseX < rightBound && mouseY > this.posY && mouseY < bottomBound) return true;
    }
}
```
The other is the sticker class which draws the image to canvas.

```js
class Sticker {
    constructor(canvas, x, y, stickerType) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.stickerType = stickerType;
        this.stickerImage = new Image();
        this.stickerImage.src = `./assets/sticker_${this.stickerType}.png`;
    }

    drawSticker(posX, posY) {
        this.x = posX;
        this.y = posY;
        let canvasContext = this.canvas.getContext('2d');
        canvasContext.drawImage(this.stickerImage, this.x, this.y, 75, 75 * this.stickerImage.height / this.stickerImage.width);
    }
}
```
An integral part of EESY is the photo capture process. The photos are temporarily saved outside of the page to maintain picture quality. A lot takes place during the photo process. The picture count is updated, the timer counts down, and the flash pops up and fades out at the end. 
```js
async function takePhotos() {
        reelDiv.style.visibility = "hidden";
        stream.style.visibility = "visible";
        multipleCaptureButton.disabled = true;
        textarea.style.display = "none";
        let pictureCount = 1;
        pictureCount.innerText = `${pictureCount} / 4`;
        
        for(let i = 0; i < offpageCanvasArray.length; i++) {
            flashElement.style.visibility = 'hidden';
            flashElement.classList.remove('flash');
            let count = 3;
            countdownTimer.innerText = count;
            let timer = setInterval(() => {
                count --;
                if(count < 1) count = 1;
                countdownTimer.innerText = count;
            }, 1000);

            await(delay(3500));
            flashElement.style.visibility = 'visible';
            flashElement.classList.add('flash');
            await(delay(500));

            
            clearInterval(timer);
            pictureCount++;
            pictureCount.innerText = `${pictureCount} / 4`;


            let offpageHolder = new Picture(stream, frames[i], videoWidth, videoHeight);
            offpageHolder.offpageCopy(offpageCanvasArray[i]);
        }
```

## Wireframe

<img src="https://github.com/gmirzayev/JSProject/blob/e020b81c3a80f71269611412e4f6c221c72da467/wireframe.png" width="600"> 

## Implementation Timeline
<ul>
  <li>Friday & Weekend: create photo taking functionality, timers, and basic layout of site.</li>
  <li>Monday: format photos(canvas) into photo reel. Work on colors and other styling choices.</li>
  <li>Tuesday: create decoration functions. Change background color of reel and add text.</li>
  <li>Wednesday: download functionality and frontend polish.</li>
  <li>Thursday Morning: submit finished app.</li>
<ul>
