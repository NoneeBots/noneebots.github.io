const savedTheme = localStorage.getItem('theme');
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

// Set initial theme based on savedTheme
if (savedTheme) {
  document.documentElement.setAttribute('data-bs-theme', savedTheme);

  if (savedTheme === 'dark') {
    moon.style.display = 'block';
    sun.style.display = 'none';
  } else {
    moon.style.display = 'none';
    sun.style.display = 'block';
  }
}
else {
    moon.style.display = 'block';
    sun.style.display = 'none';
}

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
    
    localStorage.setItem('theme', new_theme);
    document.documentElement.setAttribute('data-bs-theme', new_theme);
}