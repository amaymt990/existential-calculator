// Get all the necessary elements from the DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// This is the heart of our useless project!
const existentialQuotes = [
    "Why?",
    "All is dust.",
    "Meaning is a construct.",
    "The equation is irrelevant.",
    "42. But what was the question?",
    "ERROR: Cannot compute significance.",
    "Is 'number' even real?",
    "Look at the stars instead.",
    "Calculation leads to suffering.",
    "The answer is within you... not here.",
    "Just another Tuesday.",
    "And then what?",
    "Result undefined. So are we."
];

// Loop through each button and add a click listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // If 'C' is clicked, clear the display
            display.value = '';
        } else if (value === '=') {
            // If '=' is clicked, show a random existential quote
            const randomIndex = Math.floor(Math.random() * existentialQuotes.length);
            display.value = existentialQuotes[randomIndex];
        } else {
            // For any other button, append its value to the display
            display.value += value;
        }
    });
});
