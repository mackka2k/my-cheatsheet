// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function (doesn't pause the execution of the code)

let item = 'cryptocurrency'
let price = 420.69

let timer1 = setTimeout(firstMessage, 3000, item, price)
let timer2 = setTimeout(secondMessage, 5000)
let timer3 = setTimeout(thirdMessage, 7000)

function firstMessage(item, price) {
	alert(`Buy this ${item} course for $${price}!`)
}

function secondMessage() {
	alert(`This is not the scam!`)
}

function thirdMessage() {
	alert(`DO IT!`)
}

document.getElementById('myButton').onclick = function () {
	clearTimeout(timer1)
	clearTimeout(timer2)
	clearTimeout(timer3)
	alert(`Thanks for buying <3`)
}
