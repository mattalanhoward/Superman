class Player extends Component {
    constructor(game, x, y, w, h, speed){
        super(game, x, y, w, h, speed);
        this.LEFT = false;
        this.RIGHT = false;
        this.UP = false;
        this.DOWN = false;
        this.speed = 2;
    }


    // move player
    move() {
      if(this.LEFT) { 
        if(this.x >= 20) this.x -= this.speed;
      }
        // if(this.x <= 20) {this.x = 600}

      if(this.RIGHT) {
        if(this.x <= 600 - this.width) this.x += this.speed;	
      }
      
      if(this.UP) { 
        this.y -= this.speed;
      }
      
      // //TOP TO BOTTOM
      if(this.y < -10) {
        this.y = 400 - this.height
      }

      if(this.DOWN) {
        this.y += this.speed;	
      }

      // BOTTOM TO TOP
      if(this.y > 400 - this.height) {
        this.y = -10
      }

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
                        this.LEFT = true;
                        break;
                    case 38:
                    case 87:
                        this.UP = true;
                        break;
                    case 39:
                    case 68:
                        this.RIGHT = true;
                        break;
                    case 40:
                    case 83:
                        this.DOWN = true;
                        break;
                      case 32:
                        if(this.y <= 400 - this.height && this.x <= 600) this.x += 120
                        break;
                }
            }
    };

    
    document.onkeyup = event => {
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
                  this.LEFT = false;
                  break;
              case 38:
              case 87:
                  this.UP = false;
                  break;
              case 39:
              case 68:
                  this.RIGHT = false;
                  break;
              case 40:
              case 83:
                  this.DOWN = false;
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
      
        this.x -= 20;
        this.y -= 10;
      
    }
}


