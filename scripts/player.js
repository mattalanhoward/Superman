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
            const possibleKeysStrokes = [32,37,38,39,40];
            //includes returns true or false 
            if(possibleKeysStrokes.includes(key)){
                
                //this takes each arrow button and moves.  this.x keeps it inside the canvas.  
                //Change the x-= to change the speed of movement
                switch(key){
                    case 37: 
                        if(this.x >= 10) this.x -= 30;
                        break;
                    case 38:
                        if(this.y >= 10) this.y -= 30;
                        break;
                    case 39:
                        if(this.x <= 600 - this.width) this.x += 30;
                        break;
                    case 40:
                        if(this.y <= 380 -this.height) this.y += 30;
                        break;
                      case 32:
                        if(this.y <= 380 -this.height) this.x += 90;
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


