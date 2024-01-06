let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

moon.style.display = 'block';
sun.style.display = 'none';

function theme_change(){

    let new_theme

    if (moon.style.display == "block"){
        moon.style.display = "none"
        new_theme = 'light'
        sun.style.display = "block"
    }
    else if (sun.style.display == "block") {
        moon.style.display = "block"
        new_theme = 'dark'
        sun.style.display = "none"
    }
    
    document.documentElement.setAttribute('data-bs-theme', new_theme);
}