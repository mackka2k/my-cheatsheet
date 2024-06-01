// classList = Element property in JavaScript used to interact 
//             With an element's list of classes.
//             Allows you to make reusable classes for many elements across your website.

// add() - Adds a class to an element
// remove() - Removes a class from an element
// toggle() - Toggles between adding and removing a class from an element
// contains() - Checks if an element contains a class
// replace() - Replaces one class with another class

const myButton = document.getElementById('myButton');
const myH1 = document.getElementById('myH1');

// Adding a class
myButton.classList.add('enabled');

// Adding hover effect using mouseover and mouseout events
myButton.addEventListener('mouseover', event => {
    event.target.classList.add('hover');
});

myButton.addEventListener('mouseout', event => {
    event.target.classList.remove('hover');
});

// Click event to toggle class and add text content
myButton.addEventListener('click', event => {
    if (event.target.classList.contains('enabled')) {
        event.target.textContent += ' clicked';
    } else {
        event.target.classList.replace('disabled', 'enabled');
        event.target.textContent = 'My button';
    }
});

// Removing a class after a delay
setTimeout(() => {
    myButton.classList.remove('enabled');
}, 3000);

// Checking if an element contains a class
console.log("myButton contains 'enabled' class:", myButton.classList.contains('enabled'));

// Replacing a class
myH1.classList.replace('enabled', 'disabled');

// Toggling a class
document.getElementById('toggleButton').addEventListener('click', () => {
    myH1.classList.toggle('disabled');
});
