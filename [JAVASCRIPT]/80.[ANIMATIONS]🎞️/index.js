function moveRight() {
	const myDiv = document.getElementById('myDiv')
	let currentX = 0
	const animationId = setInterval(frame, 5)

	function frame() {
		if (currentX >= 200) {
			clearInterval(animationId)
		} else {
			currentX++
			myDiv.style.transform = `translateX(${currentX}px)`
		}
	}
}

function moveLeft() {
	const myDiv = document.getElementById('myDiv')
	let currentX = 0
	const animationId = setInterval(frame, 5)

	function frame() {
		if (currentX <= -200) {
			clearInterval(animationId)
		} else {
			currentX--
			myDiv.style.transform = `translateX(${currentX}px)`
		}
	}
}

function reverse() {
	const myDiv = document.getElementById('myDiv')
	let scaleX = 1
	const animationId = setInterval(frame, 5)

	function frame() {
		if (scaleX <= -1) {
			clearInterval(animationId)
		} else {
			scaleX -= 0.02
			myDiv.style.transform = `scaleX(${scaleX})`
		}
	}
}

function rotate() {
	const myDiv = document.getElementById('myDiv')
	let degrees = 0
	const animationId = setInterval(frame, 5)

	function frame() {
		if (degrees === 360) {
			clearInterval(animationId)
		} else {
			degrees++
			myDiv.style.transform = `rotate(${degrees}deg)`
		}
	}
}

function scale() {
	const myDiv = document.getElementById('myDiv')
	let scaleValue = 1
	const animationId = setInterval(frame, 5)

	function frame() {
		if (scaleValue >= 1.5) {
			clearInterval(animationId)
		} else {
			scaleValue += 0.01
			myDiv.style.transform = `scale(${scaleValue})`
		}
	}
}
