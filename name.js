/rock paper scissor 
function getUserChoice (userInput){
    console.log(userInput = userInput.toLowerCase())
    if(userInput === 'rock' ){
        return userInput
    } else if(userInput === 'paper'){
        return userInput
    } else if (userInput === 'scissors'){
        return userInput
    }
    else{console.log("error message")}
}
getUserChoice('')

function getComputerChoice (){
    Math.floor(Math.random() * 2)
    return 'rock', 'paper','scissors'
}

function determineWinner (userChoice,computerChoice){
if(userChoice === computerChoice){
    return 'the game is tied'
}
if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
        return 'the computer won'
    }else{return 'the user won'}
}
if(userChoice === 'scissors'){
    computerChoice === 'rock' || 'paper'
} else{ return 'you have won'}
}
// console.log(determineWinner('rock','paper'))

function playGame(){
    let userChoice = getUserChoice('rock','paper','scissors')
    let computerChoice = getComputerChoice()
    
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()
