window.onload = function () {
    let start = document.getElementById("start-button");
    start.onclick = function() {
        startGame();
        start.innerHTML = "Play Again"
    };

    function startGame(){
        const myGame = new Game ();
        myGame.init();

    }
};