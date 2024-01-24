let score = JSON.parse(localStorage.getItem('score'))
// stores the score of the game 
if (score === null) {
    score = {
        win: 0,
        losses: 0,
        tie: 0,
    };
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Win: ${score.win}, Loss: ${score.losses}, Tie: ${score.tie}`;
}
updateScore();
function gameResult() {
    document.querySelector('.js-result').innerHTML = result;
}

let result = '';
function playerGame(playerMove) {
    const computerMove = pickComputerMove();
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    }
    if (result === 'You win') {
        score.win += 1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.tie += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    function gameMove() {
        document.querySelector('.js-moves').innerHTML = `You 
<img src="${playerMove}-emoji.png" alt="" class= "move-icon">
<img src="${computerMove}-emoji.png" alt="" class= "move-icon">
Computer`;
    }

    gameResult();
    gameMove();
    updateScore();
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
