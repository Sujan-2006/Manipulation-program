
const body = document.body;
const themeButton = document.getElementById('themeButton');
const currentThemeText = document.getElementById('currentTheme');
const pageHeading = document.getElementById('pageHeading');
const pageDescription = document.getElementById('pageDescription');


let isDarkTheme = false;

function toggleTheme() {
    
    body.classList.toggle('dark-theme');
    
    
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
       
        currentThemeText.textContent = 'Dark Mode';
        currentThemeText.style.color = '#e74c3c';
        
        animateThemeChange();
    } else {
     
        currentThemeText.textContent = 'Light Mode';
        currentThemeText.style.color = '#4a90e2';
        
      
        animateThemeChange();
    }
    
  
    saveThemePreference();
    
   
    console.log(`Theme switched to: ${isDarkTheme ? 'Dark' : 'Light'} Mode`);
}
function animateThemeChange() {
  
    currentThemeText.style.transform = 'scale(1.2)';
    currentThemeText.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        currentThemeText.style.transform = 'scale(1)';
    }, 300);
}

function saveThemePreference() {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = false; 
        toggleTheme();
    }
}

themeButton.addEventListener('click', toggleTheme);

document.addEventListener('keydown', (event) => {
    if (event.key === 't' || event.key === 'T') {
        toggleTheme();
    }
});

window.addEventListener('load', loadThemePreference);

console.log('Theme Switcher loaded successfully!');
console.log('Button element:', themeButton);

if (themeButton) {
    console.log('Button found and ready!');
} else {
    console.error('Button not found! Check your HTML ID.');
}
