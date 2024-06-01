// window = interface used to talk to the web browser
//          the DOM is a property of the window

const myButton = document.getElementById('myButton')

//console.dir(window)
// console.log(window.innerHeight) // this is the height of the browser window
// console.log(window.innerWidth) // this is the width of the browser window
// console.log(window.outerHeight) // this is the height of the browser window including the address bar
// console.log(window.outerWidth) // this is the width of the browser window including the address bar
// console.log(window.scrollX) // this is the horizontal scroll position
// console.log(window.scrollY) // this is the vertical scroll position

// console.log(window.location.href) // this is the location of the page
// window.location.href = 'https://www.google.com' // this will take you to google.com

// console.log(window.location.hostname) // this is the hostname of the page
// console.log(window.location.pathname) // this is the pathname of the page

// myButton.addEventListener('click', () => {
// 	window.open('https://www.google.com', '_blank') // this will open a new window
// })

// myButton.addEventListener('click', () => {
// 	window.close() // this will close the current window
// })

// myButton.addEventListener('click', () => {
// 	window.print() // this will print the current window
// })

// window.alert('Hello World') // this will open an alert window
// window.confirm('Are you sure?') // this will open a confirm window

// let age = window.prompt('How old are you?')
// if (age < 18) {
// 	window.alert('You must be 18 or older to enter this site')
// 	window.close()
// }
