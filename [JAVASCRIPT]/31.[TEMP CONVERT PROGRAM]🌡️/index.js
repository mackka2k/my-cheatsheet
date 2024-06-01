document.getElementById('submitButton').onclick = function () {
	
}

let temp = 32
temp = toCelcius(temp)
console.log(temp)

function toCelcius(temp) {
	return (temp - 32) * (5 / 9)
}

function toFahrenheit(temp) {
	return temp * (9 / 5) + 32
}
