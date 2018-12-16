// Score Board Variables
const playerScore = document.getElementById("player");
const aiScore = document.getElementById("ai");
// Score Board Counters
let playerScoreInt = 0;
let aiScoreInt = 0;

// Game Variables
const playerChoice = document.getElementById("players-choice");
const aiChoice = document.getElementById("ais-choice");
// Result Variables
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text")

const choiceLogic = {
    "rock": {
        "rock": "tie",
        "paper": "lose",
        "scissors": "win"
    },
    "paper": {
        "paper": "tie",
        "rock": "win",
        "scissors": "lose"
    },
    "scissors": {
        "scissors": "tie",
        "rock": "lose",
        "paper": "win"
    }
};

const choiceSet = [choiceLogic.rock, choiceLogic.paper, choiceLogic.scissors];

// Get random item from choiceSet
function random() {
    return choiceSet[Math.floor(Math.random() * choiceSet.length)];
}

// pc => Player Choice
// aic => AI Choice
// return win, lose or tie
function gameLogic(pc, aic) {
    return aic[pc];
}

function toggleResultContainer() {
    if (resultContainer.className.match("display-none")) {
        resultContainer.classList.remove("display-none");
        resultText.classList.remove("display-none");
    } else {
        resultContainer.classList.add("display-none");
        resultText.classList.add("display-none");
    }
}

function showChoices(pc, aic, result) {
    playerChoice.innerHTML = pc
    aiChoice.innerHTML = aic
    resultText.innerHTML = result.toUpperCase()
    toggleResultContainer();
    setTimeout(() => {
        toggleResultContainer()
    }, 1000);
}

function main(clickedChoice) {
    let ai = random();
    let playerChoice = clickedChoice;
    let result = gameLogic(playerChoice, ai);
    let formattedAI = Object.keys(ai)[0].toUpperCase();
    let formattedPlayer = playerChoice.toUpperCase();
    showChoices(formattedPlayer, formattedAI, result);
    switch (result) {
        case "win":
            playerScoreInt += 1;
            playerScore.innerHTML = playerScoreInt;
            break;
        case "lose":
            aiScoreInt += 1;
            aiScore.innerHTML = aiScoreInt;
            break;
        default:
            break;
    }
    if(playerScoreInt == 1){
        setTimeout(() => {
            alert("Game Over You Win! \n This Page Will Reload..");
            location.reload();
        }, 1000)
    }

    if(aiScoreInt == 10){
        setTimeout(() => {
            alert("Game Over, You Lose! \n This Page Will Reload..");
            location.reload();
        }, 1000)
    }
}
