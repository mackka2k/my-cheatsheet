// setInterval() = invokes a function repatedly after a number of milliseconds
//                 asynchronous function (doesn't pause the execution of the code)

let count = 0

let max = window.prompt(`Count up to what number?`)
max = Number(max)

const myTimer = setInterval(countUp, 1000)

function countUp() {
	count += 1
	console.log(count)
	if (count >= max) {
		clearInterval(myTimer)
	}
}
