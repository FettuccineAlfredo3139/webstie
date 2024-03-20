//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//theme toggle
const colorThemes = document.querySelectorAll('[name="theme"]')

//store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('input', () => {
        storeTheme(themeOption.id);
    })
})

//apply theme
const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    })
    //fallback for no :has() support
    document.documentElement.className = theme;
}

document.onload = retrieveTheme();