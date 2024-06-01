// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name = value pairs

// console.log(navigator.cookieEnabled) // check if cookies are enabled
// document.cookie = 'firstName=John; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/' // create a cookie
// document.cookie = 'lastName=Doe; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/'
// console.log(document.cookie) // read the cookie

document.addEventListener('DOMContentLoaded', function () {
	const firstText = document.querySelector('#firstText')
	const lastText = document.querySelector('#lastText')
	const submitBtn = document.querySelector('#submitBtn')
	const cookieBtn = document.querySelector('#cookieBtn')

	submitBtn.addEventListener('click', function () {
		setCookie('firstName', firstText.value, 1)
		setCookie('lastName', lastText.value, 1)
	})

	cookieBtn.addEventListener('click', function () {
		console.log(getCookie('firstName'))
		console.log(getCookie('lastName'))
	})

	function setCookie(name, value, daysToLive) {
		const date = new Date()
		date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
		const expires = 'expires=' + date.toUTCString()
		document.cookie = name + '=' + value + ';' + expires + ';path=/'
	}

	function deleteCookie(name) {
		setCookie(name, '', -1) // To delete a cookie, set its expiration date in the past
	}

	function getCookie(name) {
		const cDecoded = decodeURIComponent(document.cookie) // decode the cookie
		const cArray = cDecoded.split(';') // split the cookie into an array

		for (let i = 0; i < cArray.length; i++) {
			let cookie = cArray[i].trim()
			if (cookie.indexOf(name + '=') === 0) {
				return cookie.substring(name.length + 1, cookie.length)
			}
		}

		return null // Return null if cookie not found
	}
})
