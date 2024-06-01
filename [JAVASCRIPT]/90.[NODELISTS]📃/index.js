// Function to remove a button
function removeButton(button) {
	button.remove();
}

// Function to add a new button
function addNewButton() {
	const container = document.getElementById('buttonContainer');
	const newButton = document.createElement('button');
	newButton.textContent = `Button ${container.children.length + 1}`;
	newButton.classList.add('myButtons');
	container.appendChild(newButton);
	newButton.addEventListener('click', () => {
			console.log(`Button ${Array.from(container.children).indexOf(newButton) + 1} clicked`);
	});
	handleHoverEffect(newButton);
	handleDoubleClick(newButton);
	handleLongPress(newButton);
}

// Function to change the color of buttons
function changeButtonColor() {
	const buttons = document.querySelectorAll('.myButtons');
	buttons.forEach(button => {
			const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
			button.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Set background color using HSL color format
	});
}

// Function to handle hover effect
function handleHoverEffect(button) {
	button.addEventListener('mouseenter', () => {
			button.style.backgroundColor = 'hsl(60, 100%, 50%)'; // Yellow color
	});

	button.addEventListener('mouseleave', () => {
			button.style.backgroundColor = 'hsl(240, 100%, 50%)'; // Blue color
	});
}

// Function to handle double click event
function handleDoubleClick(button) {
	button.addEventListener('dblclick', () => {
			button.textContent += ' - Double Clicked!';
	});
}

// Function to handle long press event
function handleLongPress(button) {
	let timeout;
	button.addEventListener('mousedown', () => {
			timeout = setTimeout(() => {
					button.textContent += ' - Long Pressed!';
			}, 1000); // 1 second for long press
	});

	button.addEventListener('mouseup', () => {
			clearTimeout(timeout);
	});
}

// Add event listeners for existing buttons
document.querySelectorAll('.myButtons').forEach(button => {
	handleHoverEffect(button);
	handleDoubleClick(button);
	handleLongPress(button);
});

// Add click event listener for "Add More" button
document.getElementById('addMoreButton').addEventListener('click', addNewButton);

// Add click event listener for "Change Color" button
document.getElementById('changeColorButton').addEventListener('click', changeButtonColor);
