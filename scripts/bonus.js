class Bonus extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new bonus
        this.x = 700;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 25;
        this.height = 50;
        this.img = new Image();
        

    }
    draw(){
        //access image
        this.img.src = "images/Lex.png";
        //draw bonus
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
    //move bonus
    move(){
        //randomized movement
        if(Math.floor(Math.random() * 20) % 3 === 0){
            this.x -= 10;
        }
    }

    collect(){
        this.x += 200;
        this.y += 2000;
    }

    taunt(){
        let taunt = [new Audio("../sound/Diseased maniac.m4a"), new Audio("../sound/Poisonous snake.m4a"), new Audio("../sound/Ever let up.m4a")]
        let randomIdx = Math.floor(Math.random() * taunt.length)
           taunt[randomIdx].play();
            
    }
}
