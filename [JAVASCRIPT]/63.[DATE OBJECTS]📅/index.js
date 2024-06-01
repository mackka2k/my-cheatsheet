// Get current date & time
let currentDate = new Date()

// Update date to a specific date and time
currentDate.setFullYear(2024)
currentDate.setMonth(11)
currentDate.setDate(31)
currentDate.setHours(23)
currentDate.setMinutes(59)
currentDate.setSeconds(59)
currentDate.setMilliseconds(999)

// Display date and time
document.getElementById('dateTime').innerHTML = currentDate.toLocaleString()

// Function to format date
function formatDate(date) {
	let year = date.getFullYear()
	let month = date.getMonth() + 1 // Month starts from 0, so add 1
	let day = date.getDate()

	return `${month}/${day}/${year}`
}

// Function to format time
function formatTime(date) {
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()
	let amOrPm = hour >= 12 ? 'PM' : 'AM'

	hour = hour % 12 || 12

	return `${hour}:${minute}:${second} ${amOrPm}`
}

// Display formatted date
document.getElementById('formattedDate').innerHTML = formatDate(currentDate)

// Display formatted time
document.getElementById('formattedTime').innerHTML = formatTime(currentDate)
