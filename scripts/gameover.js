window.onload = function () {
    //get playAgain button
    let playAgain = document.getElementById("playAgain");

    //call startGame() with playAgain button is clicked
    playAgain.onclick = function() {
        startGame();
    };

    function startGame(){
        //close window
        window.close

        //open index.html in same tab
        window.open('index.html', '_self',false)
    }

    //get item scoreboard from local storage and store value in newScore
    //this is the updated scoreboard array of objects
    var newScore = localStorage.getItem('scoreboard');

    console.log(newScore)

    //get scoreboard from gameover.html
    //this is the ul list with the id of scoreboard
    let scoreboard = document.getElementById("scoreboard");
    console.log(scoreboard)
    
    //append newScore object to scoreboard list
    // scoreboard.appendChild(newScore);
    
 
};