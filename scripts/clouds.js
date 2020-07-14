class Clouds extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new cloud
        this.x = 850;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 100;
        this.height = 80;
        this.img = new Image();
    }
    draw(){
        //access image
        this.img.src = "images/cloud1.png";
        //draw cloud
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
    //move cloud
    move(){
        //randomized movement
        if(Math.floor(Math.random() * 20) % 3 === 0){
            this.x -= 5;
        }
    }
}
