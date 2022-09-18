// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// offsetHeight = innerHeight but for elements // const pageHeight = window.innerHeight;
const logoDiv = document.getElementsByClassName('logoDiv');

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const observer_controls = {
    rootMargin: "-100px 0px 0px 0px"
};


// Check when the local host reaches a certain div --> play animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

            /* This new instance is constantly running == check if it is intersecting */
            if (entry.isIntersecting) {
            
                (entry.target.id === "roblox_content")? entry.target.classList.add("fadeInLeft") :  false;
                (entry.target.id === "discord_content")? entry.target.classList.add("fadeInRight") : null;
                (entry.target.className === "iconContainer")? entry.target.classList.add("expand") : null;

                if (entry.target.id === "cyberstart_content"){
                    document.querySelectorAll(".cyberImg")[0].classList.add('fadeInLeft');
                    document.querySelectorAll(".cyberImg")[1].classList.add('fadeInRight');
                }
        }
    })
}, observer_controls);

const mainContentContainer = document.querySelectorAll(".mainContentContainer");

observer.observe(document.querySelector(".iconContainer"));
observer.observe(mainContentContainer[0]);
observer.observe(mainContentContainer[1]);
observer.observe(mainContentContainer[2]);

// EVENT LISTENERS ----------------------------------------------------------------------------------------------------------------------

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});

// SOCIAL MEDIA -------------------------------------------------------------------------------------------------------------------------

// Check if the github icon has loaded to prevent null error
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon?.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

// EASTER EGG ----------------------------------------------------------------------------------------------------------------------------

logoDiv[0]?.addEventListener("click", () => {
    const larry = document.getElementById("larryBeach");
    
    // Prevent spamming and glitching from occuring when the easter egg is clicked
    if (larry.classList.contains("barrelRoll")){
        return;
    }
    
    // Remove the barrelRoll class from the larry image after the animation is complete
    larry?.classList.add("barrelRoll");
    setTimeout(() => {
        larry.classList.remove("barrelRoll")
    } , 2000); 
}); 
