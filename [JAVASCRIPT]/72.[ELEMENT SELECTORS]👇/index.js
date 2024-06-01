let element = document.getElementById('myTitle')
element.style.backgroundColor = 'tomato'

let fruits = document.getElementsByName('fruits')
for (let i = 0; i < fruits.length; i++) {
	if (fruits[i].checked) {
		console.log(fruits[i].value)
	}
}

let vegetables = document.getElementsByTagName('li')
if (vegetables.length >= 2) {
	vegetables[1].style.backgroundColor = 'tomato'
}

let desserts = document.getElementsByClassName('desserts')
if (desserts.length >= 2) {
	desserts[1].style.backgroundColor = 'tomato'
}

let queryElement = document.querySelector('#myTitle')
queryElement.style.backgroundColor = 'tomato'

let elements = document.querySelectorAll('.fruits')
elements.forEach(element => {
	element.style.backgroundColor = 'tomato'
})
