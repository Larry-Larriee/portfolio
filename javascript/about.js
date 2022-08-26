// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const instaIcon = document.getElementById("instagramIcon");
const githubIcon = document.getElementById("githubIcon");

const logo = document.getElementById("logo");
const cyan_bird = "../images/Hummingbirds/darkcyan_logo.png";
const black_bird = "../images/Hummingbirds/black_logo.png";

const top_content = document.querySelector(".about_me_desc_wrapper");
const header = document.querySelector("header");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const nav_options = {
    rootMargin: "-100px 0px 0px 0px" // -100px because it starts at the top of the element and you're going down 100px away from header
};

// Change Navbar color when scrolling to main content
const nav_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    
        (entry.isIntersecting) ? logo.src = cyan_bird : logo.src = black_bird;
        (entry.isIntersecting) ? header.classList.remove("nav_scrolled") : header.classList.add("nav_scrolled");
    }
    );
}, nav_options);

nav_observer.observe(top_content);

//  event listeners ----------------------------------------------------------------------------------------------------------------------

// Allow link towards github and instagram when the user clicks on the icons
instaIcon.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

// Go back to main page
logo.addEventListener("click", () => {
    window.location.replace("/");
});
