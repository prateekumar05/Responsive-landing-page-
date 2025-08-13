document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const scrollThreshold = 50; // Pixels to scroll before the class is added

    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});