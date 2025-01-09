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

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".events__card");
  
    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };
  
    const observer = new IntersectionObserver(revealOnScroll, {
      threshold: 0.1,
    });
  
    cards.forEach((card) => {
      card.style.animationPlayState = "paused"; // Pause animation initially
      observer.observe(card);
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav__links");
  
    // Toggle the 'active' class on nav__links when the hamburger is clicked
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  
  
  
