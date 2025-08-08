document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const calculator = document.querySelector('.calculator');

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

    let isCalculating = false; // Prevents clicks during animations

    // Utility function for delays
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // NEW: Typewriter effect for displaying text
    const typeText = async (element, text, delay = 50) => {
        element.value = '';
        for (const char of text) {
            element.value += char;
            await sleep(delay);
        }
    };

    // NEW: The "thinking" animation
    const think = async () => {
        const originalText = display.value;
        display.value = '';
        await sleep(200);
        display.value = '_';
        await sleep(300);
        display.value = '';
        await sleep(300);
        display.value = '_';
        await sleep(400);
        display.value = originalText; // Restore original text before showing quote
    };

    // Main button click handler
    const handleButtonClick = async (e) => {
        if (isCalculating) return; // Ignore clicks if busy

        const value = e.target.textContent;

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            isCalculating = true;
            await think();
            const randomIndex = Math.floor(Math.random() * existentialQuotes.length);
            await typeText(display, existentialQuotes[randomIndex]);
            isCalculating = false;
        } else {
            display.value += value;
        }
    };

    buttons.forEach(button => button.addEventListener('click', handleButtonClick));

    // NEW: Startup Sequence
    const runBootSequence = async () => {
        isCalculating = true;
        calculator.style.pointerEvents = 'none'; // Disable all clicks on the calculator

        await sleep(500);
        await typeText(display, '> INITIALIZING...', 30);
        await sleep(500);
        await typeText(display, '> LOADING EXISTENTIAL KERNEL...', 30);
        await sleep(500);
        await typeText(display, '> AVOIDING CERTAINTY...', 30);
        await sleep(800);
        await typeText(display, '> READY.', 50);
        await sleep(500);
        display.value = '';

        isCalculating = false;
        calculator.style.pointerEvents = 'auto'; // Re-enable clicks
    };

    // Run the boot sequence when the page loads
    runBootSequence();
});
