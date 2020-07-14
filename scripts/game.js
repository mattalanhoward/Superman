class Game {
    constructor(){
        this.canvas = undefined;
        this.ctx = undefined;
        this.character = new Player(this, 100,160, 40, 80);
        this.obstacles = [];
        this.bonusItems = [];
        this.clouds = [];
        this.backgroundImg = new Image();
        this.score = 0;
        this.lives = 1;
        this.width = canvas.width;
        this.height = canvas.height;
        this.time = 0;
        this.level = 500;
        this.heart = [];
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
        this.createBonusItems();
        this.createHeart();
        
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
            
            //add time
            this.time ++
            
            //update level
            this.updateLevel();
            
            //draw stats
            this.stats();

    
            //add clouds
            //loop through array of clouds and draw each
            for(let i = 0;i<this.clouds.length;i++){
                this.clouds[i].move();
                this.clouds[i].draw();
                //erase clouds after they leave canvas
                if(this.clouds[i].x < -50){
                this.clouds.splice(i,1);
                }
            }



            //add obstacles
            //loop through array of obstacles and draw each
            for(let i = 0;i<this.obstacles.length;i++){
                this.obstacles[i].move();
                this.obstacles[i].draw();
                if(this.character.crashCollision(this.obstacles[i])){
                    this.obstacles[i].bounce();
                    this.character.bounce();                    
                    this.ouch();
                };

                //erase obstacles after they leave canvas
                if(this.obstacles[i].x < -50){
                this.score ++
                this.obstacles.splice(i,1);
                }
            }



            //add bonusItems
            //loop through array of bonusItems and draw each
            for(let i = 0;i<this.bonusItems.length;i++){
                this.bonusItems[i].move();
                this.bonusItems[i].draw();
                if(this.character.crashCollision(this.bonusItems[i])){
                    this.bonusItems[i].collect();
                    this.score +=10                 
                };
                
                //erase bonus after they leave canvas
                if(this.bonusItems[i].x < -50){
                this.bonusItems.splice(i,1);
                }
            }


            //add heart
            //loop through array of bonusItems and draw each
            for(let i = 0;i<this.heart.length;i++){
                this.heart[i].move();
                this.heart[i].draw();
                if(this.character.crashCollision(this.heart[i])){
                    this.heart[i].collect();
                    this.lives +=1             
                };
                
                //erase heart after they leave canvas
                if(this.heart[i].x < -50){
                this.heart.splice(i,1);
                }
            }


            if(this.lives === 0){
                clearInterval(idInterval)
                this.clear()
                this.final();
            }

            

        }, 1);
        
    }
            



    //create obstacle
    createObstacles(){
        //randomly if even number create obstacle
        if(Math.floor(Math.random() * 10) % 3 === 0){
        //each time we create obstacle => push to array
        this.obstacles.push(new Obstacle(this))
        console.log(`obstacles --->`, this.obstacles)
        }

    //recurssion
    setTimeout(()=>{
        this.createObstacles();
    },this.level)
    }



    //create clouds
    createClouds(){
        //randomly if even number create cloud
        if(Math.floor(Math.random() * 10) % 2 === 0){
        //each time we create cloud => push to array
        this.clouds.push(new Clouds(this))
        console.log(`clouds --->`, this.clouds);
        }    

    //recurssion
    setTimeout(()=>{
        this.createClouds();
    },300)
    }


    
    //create bonus
    createBonusItems(){
        //randomly if even number create bonusItems
        if(Math.floor(Math.random() * 10) % 2 === 0){
        //each time we create bonusItems => push to array
        this.bonusItems.push(new Bonus(this))
        console.log(`bonusItems --->`, this.bonusItems);
        }    
    
        //recurssion
        setTimeout(()=>{
            this.createBonusItems();
        },7000)
        }


    //create bonus
    createHeart(){
        //randomly if even number create bonusItems
        if(Math.floor(Math.random() * 10) % 2 === 0){
        //each time we create heart => push to array
        this.heart.push(new Heart(this))
        console.log(`heart --->`, this.heart);
        }    
    
        //recurssion
        setTimeout(()=>{
            this.createHeart();
        },7000)
        }

    //updateLevel
    updateLevel () {
        if(this.time % 1000 === 0){
            this.level -= 50
        }
    }

    //draw stats
    stats () {
        this.ctx.font = '20px sans-serif'
        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillText(`Score: ${this.score}`, 20, 80)
        this.ctx.fillText(`Lives Left: ${this.lives}`, 20, 50)
        // this.ctx.fillText(`Time: ${this.time}`, 20, 110)
    }

    //draw background
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

    //draw character
    drawMainCharacter(){
    this.character.drawComponent("../images/flying-super-man.png")
    }

    clear(){
    //clear canvas function
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    }

    //call this function within the obstacles loop above to print something to the screen saying ouch!
    ouch() {

    
    this.lives --;
    //flash screen red when hit
    this.ctx.fillStyle = 'red'        
    this.ctx.font = '20px sans-serif'
    this.ctx.fillText("BAM!!", 300, 200)
    
    }

    final() {

    setTimeout(window.close,3000)
    setTimeout(window.open('gameover.html', '_self',false),3000)
    const userName = document.getElementById("name")
    localStorage.setItem(
    "scoreboard",
    JSON.stringify([{name: userName, score: this.score}])
)

  }


}