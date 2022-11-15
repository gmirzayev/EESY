class Sticker {
    constructor(canvas, x, y, stickerType) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.stickerType = stickerType;
    }

    drawSticker(posX, posY) {
        this.x = posX;
        this.y = posY;
        let canvasContext = this.canvas.getContext('2d');
        let stickerImage = new Image();
        stickerImage.src = `./assets/sticker_${this.stickerType}.png`;
        stickerImage.onload = () => {
            canvasContext.drawImage(stickerImage, this.x, this.y, 75, 75 * stickerImage.height / stickerImage.width);
        }
    }
}

export default Sticker;