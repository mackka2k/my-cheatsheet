// Closure: A function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

function createGame() {
	let score = 0; // Private variable accessible only inside createGame

	// Function to increase the score
	function increaseScore(points) {
			score += points;
			console.log(`+${points}pts`);
	}

	// Function to decrease the score
	function decreaseScore(points) {
			score -= points;
			console.log(`-${points}pts`);
	}

	// Function to get the current score
	function getScore() {
			return score;
	}

	// Returning the inner functions as an object
	// This object forms a closure, maintaining access to the 'score' variable
	return {
			increaseScore,
			decreaseScore,
			getScore
	};
}

const game = createGame();
game.increaseScore(5); // +5pts
game.decreaseScore(3); // -3pts
console.log(game.getScore()); // 2

