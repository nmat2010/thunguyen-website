let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

function enableDarkmode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
}

function disableDarkmode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null);
}

if (darkmode === "active") {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})


// function toggleMenu() {
//     // assign the menu-links class in html file to the menu variable
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon"); // similar
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }


