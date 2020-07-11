Project Name
"Superman!"

Description
Superman is flying faster than a speeding bullet.  Watch out for the kryptonite!  Collect hearts for extra lives.  Capture Lex Luthor for bonus points


MVP (DOM - CANVAS)
MVP definition, deliverables.


The MVP is to create a player object that dodges other objects.  

Score Screen - display at Game Over the score.

Number of obstacles increases difficulty

Backlog
Add Soundbytes from Trump on score screen based on score. 

Create projectile to shoot "krytonite"





Data structure

main.js

window.onload()

buildSplashScreen(){
}

removeSplashScreen(){
}

buildGameScreen(){
}

removeGameScreen(){
}

buildGameOverScreen(){
}

removeGameOverScreen(){
}


game.js
Game(){
  this.canvas;
  this.Superman;
}

init()

start()

createObstacles()

createClouds()

drawCharacter()

clear()


<!-- projectile.js

move()

draw()

checkCollision() -->

component.js
class component
    constructor

drawComponent()


player.js
Player extends component(){
  this.canvas;
  this.x;
  this.y;
  this.width;
  this.height;
  this.speed; 
  this.direction;
}

draw()

move()

checkCollision()

<!-- shoot() -->



obstacle.js
obstacle extends component(){
  this.canvas;
  this.x;
  this.y;
  this.direction;
  this.speed;
  this.width;
  this.height;
}

draw()

move()


clouds.js
clouds extends component(){
  this.canvas;
  this.x;
  this.y;
  this.direction;
  this.speed;
  this.width;
  this.height;
}

draw()

move()


<!-- realNews(){
  this.canvas;
  this.x;
  this.y;
  this.direction;
  this.speed;
  this.width;
  this.height;
} -->


<!-- bounceBack() -->





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


Task
Main - buildDom
Main - buildSplashScreen
Main - addEventListener
Main - buildGameScreen
Main - removeGameScreen
Main - buildGameOverScreen
Main - addEventListener
Main - removeGameOverScreen

game - Game class constructor
game - init
game - start
game - createObstacles
game - createClouds
game - drawCharacter
game - clear
game - setGameOver

<!-- projectile - move
projectile - draw
projectile - check collition -->

Player - draw
Player - move

obstacles - draw
obstacles - move

clouds - draw
clouds - move

Links
Trello
https://trello.com/b/7ODd01dz/superman

Git
URLs for the project repo and deploy


Link Repo 
https://github.com/mattalanhoward/project-1-DOM-Canvas-game
Link Deploy

Slides

URLs for the project presentation

Link Slides
