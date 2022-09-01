// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

// EVENT LISTENERS -----------------------------------------------------------------------------------------------------------------------

logo.addEventListener("click", () => {
    window.location.replace("/");
});

// Open social media links in new tab
githubIcon.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});