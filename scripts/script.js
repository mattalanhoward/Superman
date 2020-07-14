window.onload = function () {
    setTimeout(startGame(),2000);
}
    function startGame(){
        const myGame = new Game ();
        myGame.init();

    }





let restart = document.getElementById("restart-button");
restart.onclick = function() {
    window.location.reload();
}
