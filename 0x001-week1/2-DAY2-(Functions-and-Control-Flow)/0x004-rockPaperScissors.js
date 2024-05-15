const availableOptions = ['rock', 'paper', 'scissors'];

const myPick = 'rock';

//Function to generate computers choice
function computersPick() {
    let computersPick = availableOptions[Math.trunc(Math.random() * 3)];
    // console.log(computersPick);
    return computersPick;
}

//Function to determine the winner
const determineWinner = (myPick, computersPick) => {
    if (myPick === computersPick) return console.log('------ITS A TIE-------');
    if (
        (myPick === 'rock' && computersPick === 'scissors') ||
        (myPick === 'paper' && computersPick === 'rock') ||
        (myPick === 'scissors' && computersPick === 'paper')
    ) {
        return console.log('--------You win--------');
    } else {
        return console.log('--------You lose-------');
    }
};

const computer = computersPick();
console.log(`--------You picked ${myPick}----------`);
console.log(`--------Computer picked ${computer}--------\n\n`);
// Determine the winner
const result = determineWinner(myPick, computer);
