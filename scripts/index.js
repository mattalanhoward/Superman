window.onload = function () {
    let start = document.getElementById("start-button");
    start.onclick = function() {
        console.log('button click')
        startGame();
    };

    function startGame(){
        window.close
        window.open('game.html', '_self',false)

    }
};