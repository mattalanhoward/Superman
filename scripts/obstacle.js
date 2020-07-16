class Obstacle extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new obstacle
        this.x = 850;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 15;
        this.height = 15;
        this.img = new Image();

    }
    
    //create draw image function
    draw(){
        this.img.src = "images/kryptonite.png"
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
        //randomized placement
        if(Math.floor(Math.random() * 20) % 3 === 0){
            this.x -= 5;
        }
    }

    //moves obstacle out of view after collision
    bounce(){
            this.x += 200;
            this.y += 2000;
    }

    kryptonite(){
        let krypt = [new Audio("sound/Kryptonite.m4a"), new Audio("sound/Kryptonite1.m4a")]
        let randomIdx = Math.floor(Math.random() * krypt.length)
           krypt[randomIdx].play();
            
    }

    
}