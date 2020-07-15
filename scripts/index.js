window.onload = function () {
    //get start button
    let start = document.getElementById("start-button");

    //store input into var playerName
    let playerName = document.getElementById("name")
    
    //call startGame when start button is clicked.
    start.onclick = function() {
        console.log('button click')
        startGame();
    };

    function startGame(){
        //get item scoreboard from gameover.html
        const scoreboard = JSON.parse(localStorage.getItem("scoreboard"))

        //push playerName into scoreboard array
        scoreboard.push({name:playerName.value})

        //set scoreboard with new name into local storage
        localStorage.setItem("scoreboard",JSON.stringify(scoreboard))

        //close index.html
        window.close

        //open game.html in same tab to begin game.
        window.open('game.html', '_self',false)
        
    }

};