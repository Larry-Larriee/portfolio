// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// offsetHeight = innerHeight but for elements // const pageHeight = window.innerHeight;
const logoDiv = document.getElementsByClassName('logoDiv');

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Check when the local host reaches a certain div --> play animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

            /* This new instance is constantly running == check if it is intersecting */
            if (entry.isIntersecting) {
            switch (entry.target.className){ // Switch statements are similar to if statements but cleaner

                case "robloxContentContainer":
                    document.querySelectorAll(".robloxContentContainer")[0].classList.add('fadeInLeft'); // [0] in this case is the div element
                    break; // break is used to exit the switch case

                case "discordContentContainer":
                    document.querySelectorAll(".discordContentContainer")[0].classList.add('fadeInRight');
                    break;
                
                case "cyberstartContentContainer":
                    document.querySelectorAll(".cyberImg")[0].classList.add('fadeFromTop');
                    document.querySelectorAll(".cyberImg")[1].classList.add('fadeFromTop');
                    break;

                case "iconContainer":
                    document.querySelectorAll(".iconContainer")[0].classList.add('expand');
                    break;

                // no default
            }
        }
    })
});

observer.observe(document.querySelector(".iconContainer"));
observer.observe(document.querySelector('.robloxContentContainer'));
observer.observe(document.querySelector('.discordContentContainer'));
observer.observe(document.querySelector('.cyberstartContentContainer'));

// EVENT LISTENERS ----------------------------------------------------------------------------------------------------------------------

// SOCIAL MEDIA -------------------------------------------------------------------------------------------------------------------------

// Open social media links in new tab
githubIcon.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

// EASTER EGG ----------------------------------------------------------------------------------------------------------------------------

logoDiv[0].addEventListener("click", () => {
    const larry = document.getElementById("larry");

    larry.classList.toggle("barrelRoll"); // Toggle class barrelRoll

})