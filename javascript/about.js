// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const instaIcon = document.getElementById("instagramIcon");
const githubIcon = document.getElementById("githubIcon");

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
    rootMargin: "-110px 0px 0px 0px"
};

const timeline_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // Do not add an animation for the first grid element
        if (entry.isIntersecting && entry.target.id == "time_one") {
            return;
        }

        // Add animation for every other grid element 
        (entry.isIntersecting) ? entry.target.classList.add("fadeIn") : entry.target.classList.remove("xx");

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
