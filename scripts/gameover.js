window.onload = function () {
    let playAgain = document.getElementById("playAgain");
    playAgain.onclick = function() {
        startGame();
    };

    function startGame(){
        window.close
        window.open('../index.html', '_self',false)
    }
};