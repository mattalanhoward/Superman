class Player extends Component {
    constructor(game, x, y, w, h, speed){
        super(game, x, y, w, h, speed);
    }

    //move player
    move() {
        document.onkeydown = event => {
            event.preventDefault() // stops the button scrolling the page

            const key = event.keyCode;

            //keycodes for arrows
            const possibleKeysStrokes = [32,37,38,39,40,87,65,68,83];
            //includes returns true or false 
            if(possibleKeysStrokes.includes(key)){
                
                //this takes each arrow button and moves.  this.x keeps it inside the canvas.  
                //Change the x-= to change the speed of movement
                switch(key){
                    case 37:
                    case 65: 
                        if(this.x >= 20) this.x -= this.speed * 30;
                        break;
                    case 38:
                    case 87:
                        if(this.y >= 20) this.y -= this.speed * 30;
                        break;
                    case 39:
                    case 68:
                        if(this.x <= 600 - this.width) this.x += this.speed * 30;
                        break;
                    case 40:
                    case 83:
                        if(this.y <= 380 - this.height) this.y += this.speed * 30;
                        break;
                      case 32:
                        if(this.y <= 400 - this.height && this.x <= 600) this.x += 120
                        break;
                }
            }
    };
}
    
    crashCollision(element){
      if(this.x - 10 < element.x+ element.width && this.x + this.width > element.x && this.y < element.y + element.height && this.height + this.y > element.y) {
        return true
      } else { 
        return false      
      }
    }

    bounce() {
      
        this.x -= 30;
        this.y -= 20;
      
    }
}


