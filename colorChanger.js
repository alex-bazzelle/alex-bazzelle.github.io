// Example initialization code for your game
        var gameContainer = document.getElementById('game-container');
        // Initialize your game within the 'game-container'


// Get references to the circle and button elements
const circle = document.getElementById('circle');
const colorButton = document.getElementById('colorButton');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of the circle
function changeColor() {
    const newColor = getRandomColor();
    circle.style.backgroundColor = newColor;
}

// Add a click event listener to the button
colorButton.addEventListener('click', changeColor);
