const myLabel = document.getElementById('myLabel')

update() // Call the update function initially
setInterval(update, 1000) // Update the time every second

function update() {
	let date = new Date()
	myLabel.innerHTML = formatTime(date) // Pass the 'date' parameter to formatTime()

	function formatTime(date) {
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		let amOrPm = hours >= 12 ? 'PM' : 'AM'

		hours = hours % 12 || 12

		hours = formatZeroes(hours)
		minutes = formatZeroes(minutes)
		seconds = formatZeroes(seconds)

		return `${hours}:${minutes}:${seconds}:${amOrPm}`
	}

	function formatZeroes(time) {
		time = time.toString()
		return time.length < 2 ? `0${time}` : time
	}
}
