class Player extends Component {
    constructor(game, x, y, w, h){
        super(game, x, y, w, h);
    }

    //move player
    move() {
        document.onkeydown = event => {
            event.preventDefault() // stops the button scrolling the page

            const key = event.keyCode;

            //keycodes for arrows
            const possibleKeysStrokes = [37,38,39,40];
            //includes returns true or false 
            if(possibleKeysStrokes.includes(key)){
                
                //this takes each arrow button and moves.  this.x keeps it inside the canvas.  
                //Change the x-= to change the speed of movement
                switch(key){
                    case 37: 
                        if(this.x >= 10) this.x -= 20;
                        break;
                    case 38:
                        if(this.y >= 10) this.y -= 20;
                        break;
                    case 39:
                        if(this.x <= 600 - this.width) this.x += 20;
                        break;
                    case 40:
                        if(this.y <= 380 -this.height) this.y += 20;
                        break;
                }
            }
    };
}
    
    crashCollision(element){
        //TOP COLLISION
        //y axis
        if(this.y + 10 <= element.y + element.height && this.y >= element.y){
          //x axis
          if(this.x + 30 >= element.x && this.x<= element.x + element.width){
            setTimeout(() => {
            console.log("top crash");
            }, 5);
            //reloads page everytime we crash
            // window.location.reload();
            
          }
        }
        //BOTTOM COLLISION
        //y axis
        if(this.y + this.height >= element.y && this.y + this.height <= element.y + element.height){
          //x axis
          if(this.x + 30 >= element.x && this.x<= element.x + element.width){
            setTimeout(() => {
            console.log("bottom crash");
            }, 5);
            //reloads page everytime we crash
            // window.location.reload();
          }
        }
        //RIGHT COLLISION
        //x axis
        if(this.x + this.width >= element.x && this.x + this.width <= element.x + element.width){
            //y axis
            if(this.y + 80 >= element.y && this.y<= element.y + element.height){
              setTimeout(() => {
              console.log("right crash");
              }, 5);
              //reloads page everytime we crash
              // window.location.reload();
            }
          }
        //LEFT COLLISION
        //x axis
        if(this.x >= element.x && this.x <= element.x + element.width){
            //y axis
            if(this.y + 80 >= element.y && this.y<= element.y + element.height){
              setTimeout(() => {
              console.log("left");
              }, 5);
              //reloads page everytime we crash
              // window.location.reload();
            }
          }
      }
}

