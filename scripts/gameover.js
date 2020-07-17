window.onload = function () {
    //play intro music
    let usedToPlay = new Audio("sound/Used to play.mp3")
    usedToPlay.play();

    let endTheme = new Audio("sound/End Theme.mp3")
    endTheme.play();
    endTheme.volume = 0.4;
    
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
    //parse changes the string to an object
    let newScore = JSON.parse(localStorage.getItem('scoreboard'));

    
    

    //sort newScore array by score
    newScore.sort((a, b) => (a.score < b.score) ? 1 : -1)
    

    

    //get scoreboard from gameover.html
    let scoreboard = document.getElementById("scoreboard");
 
    
    //create loop to insert name and scores into table
    
    for(i=0;i<5;i++){

            //create text nodes for name and score
            let nameNode = document.createTextNode(newScore[i].name);
            let scoreNode = document.createTextNode(newScore[i].score)  
        
            //insert new row       
            let newRow = scoreboard.insertRow(-1);

            //insert Name cell
            let newNameCell = newRow.insertCell(0);
            newNameCell.setAttribute("class", "name")

            //insert Score cell
            let newScoreCell = newRow.insertCell(1)
            newScoreCell.setAttribute("class", "score")

            //append name and score nodes to cells
            newNameCell.appendChild(nameNode)
            newScoreCell.appendChild(scoreNode)
        }
};


