// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// offsetHeight = innerHeight but for elements // const pageHeight = window.innerHeight;
const logoDiv = document.getElementsByClassName('logoDiv');
const footerMainLogo = document.getElementById("footer-hummingbird-logo");

const githubIcon = document.getElementById("github");
const instaIcon = document.getElementById("instagram");
const discordIcon = document.getElementById("discord");
const linkedinIcon = document.getElementById("linkedin");

// Specific project containers on the main page
const project_mainpage = document.querySelectorAll(".project-mainpage"); 

// Link to all projects
const all_projects_link_wrapper = document.querySelector(".all-projects-link-wrapper");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const observer_controls = {
    rootMargin: "0% 0% -20% 0%"
};

function revealContent(targetEntry){
    targetEntry.classList.remove("content_hiding");
}

let loadedFeatured = false; // Disallow animation from running multiple times

// Check when the local host reaches a certain div --> play animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

            /* This new instance is constantly running == check if it is intersecting */
            if (entry.isIntersecting) {            
                const targetEntry = entry.target;

                switch (targetEntry.classList[0]) { // Get the first classname (usually the first and default styler for that element)

                    case "iconContainer":

                        revealContent(targetEntry);
                        targetEntry.classList.add('fadeFromBottom');                        
                        break;
                    
                    case "featured-projects-wrapper-mainpage":
                        revealContent(targetEntry);

                        if (loadedFeatured){
                            break;
                        }
                        loadedFeatured = true;

                        for (let i = 0; i < 3; i++) {

                            revealContent(project_mainpage[i]);
                            project_mainpage[i].classList.add(`fade-featured-projects-${i}`); // f-strings
                        }

                        revealContent(all_projects_link_wrapper);
                        all_projects_link_wrapper.classList.add("all-projects-link-animation");

                        setTimeout(() => { // Remove this animation class after finishing --> allow transform: translateY() to function since the animation forces translateY() to end at 0px
                            for (let j = 0; j < 3; j++) {
                                project_mainpage[j].classList.remove(`fade-featured-projects-${j}`); // f-strings
                            }
                        }, 3000)

                        break;

                    case "need-a-website-link-to-contacts":

                        revealContent(targetEntry);
                        targetEntry.classList.add('fadeFromBottom');                        
                        break;

                    // no default
                }
                

        }
    })
}, observer_controls);

const iconContainer = document.querySelector(".iconContainer");
const projects = document.querySelector(".featured-projects-wrapper-mainpage");
const website_builder = document.querySelector(".need-a-website-link-to-contacts");

observer.observe(iconContainer);
observer.observe(projects);
observer.observe(website_builder);

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
    window.open("https://github.com/Larry-Larriee")
});

linkedinIcon?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/")
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
