class Obstacle extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new obstacle
        this.x = 700;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 30;
        this.height = 20;
        this.img = new Image();
    }
    

    draw(){
        //access random image
        // const newsArr = [""]
        // const randomIdx = Math.floor(Math.random()*3)
        // this.img.src = newsArr[randomIdx]

        this.img.src = "../images/kryptonite.png"
    
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }


    //move obstacle
    move(){
        //randomized movement
        if(Math.floor(Math.random() * 20) % 3 === 0){
            this.x -= 5;
        }
    }


    bounce(){
            // this.x += 200;
            // this.y += 2000;
    }

    
}