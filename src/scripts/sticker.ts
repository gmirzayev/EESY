class Sticker {

    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    stickerType: string;
    stickerImage: HTMLImageElement;

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

export default Sticker;