// If Statement Project/Exercise - 'Dice Price' Quiz Game

// 1. Use Math.random, if, else, else if and template literals to create the game.
// 2. Start by writing a flow chart on paper to plan out your code.

let dice1 = Math.floor(Math.random() *6) +1;
let dice2 = Math.floor(Math.random() *6) +1;

console.log(dice1, dice2);

if (dice1 === 6 && dice2 === 6) {
    console.log("You won the top prize! A Bear!");
}

else if (dice1 === dice2) {
    console.log("You win three free throws!")
}

else if ((dice1 + dice2) %2 === 0) {
    console.log ("You win one free throw!");
}

else {
    console.log ("You lose the game")
}

// 3. If you finish early, you can incorporate alerts and prompts into the game.
console.log(`You threw ${dice1} and ${dice2}`)
