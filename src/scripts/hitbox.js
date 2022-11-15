import Sticker from './sticker';

class Hitbox {
    constructor(canvas, stickerType) {
        this.stickerType = stickerType;
        this.canvas = canvas;
        this.width = 75;
        this.height = 75;
        this.posX = 0;
        this.posY = 0;
        this.sticker = new Sticker(this.canvas, this.posX, this.posY, stickerType);
        // this.drawBox();
        this.drawSticker();
    }

    // drawBox() {
    //     let stickerCanvasContext = this.canvas.getContext('2d');
    //     stickerCanvasContext.beginPath();
    //     stickerCanvasContext.rect(this.posX, this.posY, 75, 75);
    //     stickerCanvasContext.stroke();
    // }

    drawSticker() {
        // let stickerX = this.pos
        // let yPos = 100;

        this.sticker.drawSticker(this.posX, this.posY);
    }

    hit(mouseX, mouseY) {
        let rightBound = this.posX + this.width;
        let bottomBound = this.posY + this.height;
        if(mouseX > this.posX && mouseX < rightBound && mouseY > this.posY && mouseY < bottomBound) return true;
    }
}

export default Hitbox;