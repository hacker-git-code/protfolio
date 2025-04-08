document.addEventListener('DOMContentLoaded', () => {

    // --- Set Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Intersection Observer for Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after revealing to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'visible' class to re-animate if scrolling up
                 // entry.target.classList.remove('visible');
                 // Consider performance implications if you enable this.
                 // For a minimal portfolio, animating only once is often better.
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
        intersectionObserver.observe(el);
    });

    // --- Optional: Smooth Scroll for internal links (if CSS scroll-behavior isn't enough) ---
    // This provides more control but CSS `scroll-behavior: smooth` is simpler.
    // Uncomment if needed:
    /*
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Adjust alignment if needed ('center', 'end')
                });
            }
        });
    });
    */

    console.log("Abstract portfolio script loaded.");
});