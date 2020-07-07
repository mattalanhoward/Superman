class Game {
    constructor(){
        this.canvas = undefined;
        this.ctx = undefined;
        this.character = new Player(this, 100,160, 40, 80);
        this.obstacles = [];
        this.clouds = [];
        this.backgroundImg = new Image();
        this.score = 0;
        this.hits = 0;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    //initialize game
    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createObstacles();
        this.createClouds();
    }

    //start game
    start() {
        this.drawBackGround();
        this.drawMainCharacter();
        //set frame refresh => can also use request animation frame
        const idInterval = setInterval(() => {
            //clear canvas
            this.clear();
            //draw back ground
            this.drawBackGround();
            //draw character
            this.drawMainCharacter();
            //call move function to move character
            this.character.move();
        

            //add clouds
            //loop through array of clouds and draw each
            for(let i = 0;i<this.clouds.length;i++){
                this.clouds[i].move();
                this.clouds[i].draw();
                //erase clouds after they leave canvas
                if(this.clouds[i].x < -100){
                this.clouds.splice(i,1);
                }
            }
            //add obstacles
            //loop through array of obstacles and draw each
            for(let i = 0;i<this.obstacles.length;i++){
                this.obstacles[i].move();
                this.obstacles[i].draw();
                if(this.character.crashCollision(this.obstacles[i])){
                    // this.obstacles[i].bounce();
                    clearInterval(idInterval)
                    this.clear()
                    this.final();

                    // this.ouch();
                };
                //erase obstacles after they leave canvas
                if(this.obstacles[i].x < -50){
                this.score ++
                this.obstacles.splice(i,1);
                
                }
                //can add score here.
                
            }

        }, 20);
    }

    //create obstacle
    createObstacles(){
        //randomly if even number create obstacle
        if(Math.floor(Math.random() * 10) % 2 === 0){
        //each time we create obstacle => push to array
        this.obstacles.push(new Obstacle(this))
        console.log(`obstacles --->`, this.obstacles);
        }

    //recurssion
    setTimeout(()=>{
        this.createObstacles();
    },2000)
    }

    //create clouds
    createClouds(){
        //randomly if even number create obstacle
        if(Math.floor(Math.random() * 10) % 2 === 0){
        //each time we create obstacle => push to array
        this.clouds.push(new Clouds(this))
        console.log(`clouds --->`, this.clouds);
        }    

    //recurssion
    setTimeout(()=>{
        this.createClouds();
    },3000)
    }

    drawBackGround(){
        //link image
        this.backgroundImg.src = "../images/blue-sky.png";
        //draw image
        this.ctx.drawImage(
        this.backgroundImg,
        this.x,
        this.y,
        this.width,
        this.height
        );
    }

drawMainCharacter(){
    this.character.drawComponent("../images/baby-trump.png")
}

clear(){
    //clear canvas function
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
}

final() {
    // console.log('crash')
    this.ctx.fillStyle = 'ff0000'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.font = '20px sans-serif'
    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillText(`Your final score: ${this.score}`, 300, 200)
    this.ctx.fillStyle = 'black'

  }

  //call this function within the obstacles loop above to print something to the screen saying ouch!
  ouch() {
    // console.log('crash')
    this.ctx.fillStyle = 'ff0000'
    this.ctx.fillRect(0, 0, this.width, this.height)

    this.ctx.font = '20px sans-serif'
    this.ctx.fillStyle = '#ffffff'
    this.ctx.fillText("A POLITICAL WITCH HUNT!", 300, 200)
    this.ctx.fillStyle = 'red'

  }

}