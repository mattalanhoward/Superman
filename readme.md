Project Name
"Superman!"

Description
Superman is flying faster than a speeding bullet.  Watch out for the kryptonite!  Collect hearts for extra lives.  Capture Lex Luthor for bonus points


MVP (DOM - CANVAS)
MVP definition, deliverables.


The MVP is to create a player object that dodges other objects.  

Score Screen - display at Game Over a leaderboard with top 5 scores.

With time more obstacles are created to increase difficulty

Backlog

Create projectile to shoot "krytonite"





Data structure

index.js

window.onload()

start.onclick(){
  startGame()
}


game.js

Game(){
  constructor(){
    this.character
    this.obstacles
    this.bonusItems
    this.clouds
    this.heart
    this.backgroundImg
    this.score
    this.lives
    this.width
    this.height
    this.distance
    this.level
    this.scoreboard
    this.pause
    this.pauseButton
    this.backgroundMusic
    this.introMusic
  }
}

init(){
  this.canvas
  this.ctx
  this.x
  this.y
  this.setEventListenerPauseButton()
  this.start();
  this.createObstacles();
  this.createClouds();
  this.createBonusItems();
  this.createHeart();
  setInterval(() => {
      this.backgroundMusic.play();
  }, 1000);
}


start(){

setInterval() {
  this.clear()

  this.drawBackGround()

  this.drawMainCharacter()

  if(this.pause === flase){
    this.character.move()

    this.distance ++

    this.updateLevel()

    this.stats()

    this.addClouds()

    this.addObstacles()

    this.addBonusItems()

    this.addHeart()

    endGame()
  }
}
}
createObstacles()

createClouds()

createBonusItems()

createHeart()

addClouds()

addObstacles()

addBonusItems()

addHeart()

updateLevel ()

stats()

drawBackGround()

drawMainCharacter()

clear()

hit()

ouch()

final()

setEventListenerPauseButton()


gameover.js
  window.onload()

  playAgain.onclick()
  
  scoreboard()


component.js
constructor ()

drawComponent()


player.js
Player extends component(){
  constructor (){
    super()
    this.LEFT
    this.RIGHT
    this.UP
    this.DOWN
    this.speed
  }

move()

crashCollision()

bounce()

<!-- shoot() -->
}


obstacle.js
obstacle extends component(){
  constructor(){
    super()
    this.x
    this.y
    this.width
    this.height
    this.img
  }

draw()

move()

bounce()

kryptonite()
}


clouds.js
clouds extends component(){
  constructor(){
    super(game){
this.x
this.y
this.width
this.height
this.img
}

draw()

move()


bonus.js
class Bonus extends component(){
  constructor(game){
    super()
    this.x
    this.y
    this.width
    this.height
    this.img
  }

  draw()

  move()

  collect()

  taunt()

  <!-- villians() -->
}

heart.js
class Bonus extends component(){
  constructor(game){
    super()
    this.x
    this.y
    this.width
    this.height
    this.img
  }

  draw()

  move()

  collect()

}


script.js

window.onload(){
  startGame
  new Game()
}

restart.onclick(){
  window.location.reload()
}



States and States Transitions
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- startGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 



Links
Trello
https://trello.com/b/7ODd01dz/superman

Git
URLs for the project repo and deploy
https://mattalanhoward.github.io/project-1-DOM-Canvas-game/

Link Repo 
https://github.com/mattalanhoward/project-1-DOM-Canvas-game

Link Deploy
https://mattalanhoward.github.io/project-1-DOM-Canvas-game/

Slides
https://docs.google.com/presentation/d/1yCmvoAiPB8BcmvM8yupe3tK6ndeyBIX44ENLlzyJC-s/edit#slide=id.g8d6767bb03_0_81


