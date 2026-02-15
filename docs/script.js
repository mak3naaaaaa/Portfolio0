scriptjss
function toggleMenu(){
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}
/* Close menu when clicking link */
const navLinks = document.querySelectorAll(".menu-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");

        menu.classList.remove("open");
        icon.classList.remove("open");
    });
});

/* Smooth scrolling */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});