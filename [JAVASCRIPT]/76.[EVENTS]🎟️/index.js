// const element = document.getElementById('myButton')
// const element = document.body
// const element = document.getElementById('myText')
const element = document.getElementById('myDiv')

// element.onlick = doSomething
// element.onload = doSomething
// element.onchange = doSomething
// element.onmouseover = doSomething
// element.onmouseout = doSomethingElse
element.onmousedown = doSomething
element.onmouseup = doSomethingElse

function doSomething() {
	// alert('Something Happened!')
	element.style.backgroundColor = 'red'
}

function doSomethingElse() {
	// alert('Something Else Happened!')
	element.style.backgroundColor = 'lightgreen'
}
