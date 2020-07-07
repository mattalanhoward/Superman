class Obstacle extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new obstacle
        this.x = 700;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 50;
        this.height = 30;
        this.img = new Image();
    }
    
    draw(){
        //access image
        //need to randomly select 1 of 3 news sources
        let nbc = this.img.src = "../images/msnbc.png";
        // let nytimes = this.img.src = "../images/nytimes.png";
        // let cnn = this.img.src = "../images/cnn.png";
        // let news = [nbc,nytimes,cnn]
        //draw news
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
            this.x += 200;
            this.y += 2000;
    }

    
}