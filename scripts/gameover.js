window.onload = function () {
    let playAgain = document.getElementById("playAgain");
    playAgain.onclick = function() {
        startGame();
    };

    function startGame(){
        window.close
        window.open('index.html', '_self',false)
    }

    var newScore = localStorage.getItem('scoreboard');

    console.log(newScore)

    let scoreboard = document.getElementById("scoreboard");
    // var li = document.createElement("li");
    scoreboard.appendChild(newScore);
 
};