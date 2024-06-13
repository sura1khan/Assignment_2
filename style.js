document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenItems = document.querySelectorAll(".menu-item.hidden");

    toggleButton.addEventListener("click", function() {
        hiddenItems.forEach(item => {
            if (item.style.display === "none" || item.style.display === "") {
                item.style.display = "list-item";
            } else {
                item.style.display = "none";
            }
        });

        if (toggleButton.textContent === "See More") {
            toggleButton.textContent = "See Less";
        } else {
            toggleButton.textContent = "See More";
        }
    });
});
