// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const cyan_bird = "../images/Hummingbirds/darkcyan_logo.png";
const black_bird = "../images/Hummingbirds/black_logo.png";

const top_content = document.querySelector(".top_page_description_wrapper");
const header = document.querySelector("header");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const nav_options = {
    rootMargin: "-100px 0px 0px 0px" // -100px as you want to start 100px early
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


const time_content = document.querySelectorAll(".timeline_content_wrapper");
const timeline_options = {
    rootMargin: "0% 0% -15% 0%"
};

const timeline_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // Do not add an animation for the first grid element
        if (entry.isIntersecting && entry.target.id === "time_one") {
            return;
        }
               
        // Add animation for every other grid element 
        else if (entry.isIntersecting) {
            entry.target.classList.remove("content_hiding");
            entry.target.classList.add("fadeIn");
        }
    });
}, timeline_options);

timeline_observer.observe(time_content[0]);
timeline_observer.observe(time_content[1]);
timeline_observer.observe(time_content[2]);
timeline_observer.observe(time_content[3]);
timeline_observer.observe(time_content[4]);
timeline_observer.observe(time_content[5]);
timeline_observer.observe(time_content[6]);
timeline_observer.observe(time_content[7]);
timeline_observer.observe(time_content[8]);
timeline_observer.observe(time_content[9]);
timeline_observer.observe(time_content[10]);
timeline_observer.observe(time_content[11]);
timeline_observer.observe(time_content[12]);
timeline_observer.observe(time_content[13]);


//  event listeners ----------------------------------------------------------------------------------------------------------------------

const footerMainLogo = document.getElementById("footer-hummingbird-logo");

const githubIcon = document.getElementById("github");
const instaIcon = document.getElementById("instagram");
const discordIcon = document.getElementById("discord");
const linkedinIcon = document.getElementById("linkedin");

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

// Check if the github icon has loaded to prevent null error
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee")
});

linkedinIcon?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/");
});

discordIcon?.addEventListener("click", () => {
    window.open("https://discordapp.com/users/490277278136270874");
});

instaIcon?.addEventListener("click", () => {
    window.open("https://www.instagram.com/larry_larriee/");    
});

footerMainLogo?.addEventListener("click", () => {
    window.location.replace("/");
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});