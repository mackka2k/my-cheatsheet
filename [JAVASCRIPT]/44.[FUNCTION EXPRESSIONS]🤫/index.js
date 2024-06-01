// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with function names
//                       Write it, then forget about it
//                       Can be stored in a variable

let count = 0

document.getElementById('increaseButton').onclick = function () {
	count += 1
	document.getElementById('myLabel').innerHTML = count
}

document.getElementById('decreaseButton').onclick = function () {
	count -= 1
	document.getElementById('myLabel').innerHTML = count
}
