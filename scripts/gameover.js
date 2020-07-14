window.onload = function () {
    let playAgain = document.getElementById("playAgain");
    playAgain.onclick = function() {
        startGame();
    };

    function startGame(){
        window.close
        window.open('../game.html', '_self',false)
    }

    // let user = document.getElementById("userName").value;

    // alert(user)
};