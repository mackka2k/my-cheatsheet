// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement('h1')
// nameTag.textContent = window.prompt('What is your name?')
// document.body.appendChild(nameTag)

const myList = document.querySelector('#fruit')
const listItem = document.createElement('li')
listItem.textContent = 'Pears'
// myList.append(listItem) // append adds to the end of the list
// myList.prepend(listItem) // prepend adds to the beginning of the list
myList.insertBefore(listItem, myList.getElementsByTagName('li')[1]) // insertBefore adds before the second child of the list
