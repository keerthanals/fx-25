// You can control additional logic for triggering, but this example
// already relies on CSS for animation timing.

document.addEventListener("DOMContentLoaded", () => {
    // The DOM is fully loaded, and the animation will begin
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        // Reset animation for each letter to allow re-triggering on page load
        letter.style.animation = 'none';
        letter.offsetHeight; // Trigger reflow
        letter.style.animation = ''; // Restore animation
    });
});
