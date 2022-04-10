/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b) {
	/*add your code here*/
	return a * b;
}
multiply(2, 3);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/

function catYears(age) {
	/*add your code here*/
	const catYears = age * 7;
	return catYears;
}
catYears(1);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// ------------
const myFunction = () => {
	console.log('Function was invoked!');
};

myFunction();

// ----------------

let anotherFunction = (param) => {
	return param;
};

anotherFunction('Example');

// ---------------

let add = (param1, param2) => {
	return param1 + param2;
};

add(1, 2);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Create a global variable that randomly generates the computer's choice
let computerChoice = Math.random() * 1;
// Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

// HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

// Use the game function below to do the following:
const game = (userChoice) => {
	// 1. Determine the computer's choice
	if (computerChoice < 0.34) {
		computerChoice = 'rock';
	} else if (computerChoice <= 0.67) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}
	// 2. Compare the user's choice to the computer's choice
	// 3. Return the result of the game
	if (userChoice === computerChoice) {
		return 'The result is a tie!';
	} else if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else {
		return 'Please enter a valid choice!';
	}
};
const userChoice = 'rock';
game(userChoice);

//   1. Receive 2 parameters the user's choice and the computer's choice
//   2. Use the game function to determine the winner
//   3. Return the winner
const game2 = (userChoice, computerChoice) => {
	// 1. Determine the computer's choice
	if (computerChoice < 0.34) {
		computerChoice = 'rock';
	} else if (computerChoice <= 0.67) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}
	// 2. Compare the user's choice to the computer's choice
	// 3. Return the result of the game
	if (userChoice === computerChoice) {
		return 'The result is a tie!';
	} else if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	} else {
		return 'Please enter a valid choice!';
	}
};
game2('rock', 0.5); // The computer won! 🤣
//   2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
//    - win should return "you win!"
//    - lose should return "you lose!"
//    - tie should return "it's a tie"

//   RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

//   HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters

// function game(user, computer){
//     /*add your code here*/

// }

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!

// Using the annoyingSong function below do the following:
//   1. Receive a starting number and start the count down from the number received
//   2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
//       "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
const annoyingSong = (number) => {
	/*add your code here*/
	let song = '';
	for (let i = number; i > 0; i--) {
		song += `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${
			i - 1
		} bottles of soda on the wall.\n`;
	}
	return song;
};
console.log(annoyingSong(9));

function annoyingSong(/*add your code here*/) {
	/*add your code here*/
}
