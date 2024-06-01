const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0

document.getElementById('submitButton').onclick = function () {
	let guess = document.getElementById('guessField').value
	guesses += 1

	if (guess == answer) {
		alert(`${guess} is correct! You guessed ${guesses} times.`)
	} else if (guess > answer) {
		alert(`${guess} is too high!`)
	} else {
		alert(`${guess} is too low!`)
	}
}
