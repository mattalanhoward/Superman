class Game {
    constructor(){
        this.canvas = undefined;
        this.ctx = undefined;
        this.babyTrump = new Player(this, 100,160, 40, 80);
        this.obstacles = [];
        this.clouds = [];
        this.background = undefined;
        this.backgroundImg = new Image();
        this.score = 0;
        this.hits = 0;
        this.x = undefined;
        this.y = undefined;
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
        setInterval(() => {
            //clear canvas
            this.clear();
            //draw back ground
            this.drawBackGround();
            //draw babyTrump
            this.drawMainCharacter();
            //call move function to move character
            this.babyTrump.move();

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
                this.babyTrump.crashCollision(this.obstacles[i]);
                //erase news after they leave canvas
                if(this.obstacles[i].x < -100){
                this.obstacles.splice(i,1);
                //can add score here.
                }
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
    },3000)
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
    this.babyTrump.drawComponent("../images/baby-trump.png")
}

clear(){
    //clear canvas function
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
}
}