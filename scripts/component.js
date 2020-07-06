class Component {
    constructor(game, x, y, w, h,speedX,speedY){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speedX = 1;
        this.speedY = 1;
        this.img = new Image();

    }
    
    drawComponent(imgSource){
        //get game
        const gameCtx = this.game.ctx;
        //pass image source
        this.img.src = imgSource;
        gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
}
