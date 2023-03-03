import Sticker from './sticker';

class Hitbox {

    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    posX: number;
    posY: number;
    sticker: Sticker;
    

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

export default Hitbox;
