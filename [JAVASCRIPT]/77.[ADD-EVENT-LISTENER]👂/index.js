const innerDiv = document.getElementById('innerDiv')
const outerDiv = document.getElementById('outerDiv')

innerDiv.addEventListener('click', changeBlue)
outerDiv.addEventListener('click', changeBlue, true) // true means the event will be captured by the outerDiv first

function changeBlue(event) {
	const clickedElement = event.currentTarget
	alert(`You selected ${clickedElement.id}`)
	clickedElement.style.backgroundColor = 'blue'
}
