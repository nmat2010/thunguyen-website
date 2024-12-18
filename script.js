function toggleMenu() {
    // assign the menu-links class in html file to the menu variable
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon"); // similar
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}