class Component {
    constructor(game, x, y, w, h){
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.speed = 1;

    }
    
    drawComponent(imgSource){
        //get game
        const gameCtx = this.game.ctx;
        //pass image source
        this.img.src = imgSource;
        gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
}
