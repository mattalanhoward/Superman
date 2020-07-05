Project Name
"Donald Trump Defends America from the "Fake News" media"

Description
Donald Trump is here to defend America from the Fake News Media.  Move Trump up and down to dodge "Fake News" sources as if they were draft cards for the Vietnam war.  


MVP (DOM - CANVAS)
MVP definition, deliverables.


The MVP is to create a player object that dodges other objects.  
3 "Fake News" hit Trump. => Game Over.


Backlog
Score Screen - display at Game Over the number of "Fake News" shots.

Adjust speed of obstacles to increase difficulty

Add Soundbytes from Trump on score screen based on score. 

Create projectile to shoot "Fake News"

If "Fake News" gets by Trump he loses 1 power and shrinks in size.  If he collects "Real News", he gains 1 power and grows in size.  Start size is 2, Max is 3, 0 => Game Over. 




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
  this.babyTrump;
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



<!-- checkifPassedTrump() -->

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
https://trello.com/b/7ODd01dz/trump-defends-america

Git
URLs for the project repo and deploy

Link Repo 
https://github.com/mattalanhoward/project-1-DOM-Canvas-game
Link Deploy

Slides

URLs for the project presentation

Link Slides