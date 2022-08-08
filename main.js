// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// offsetHeight = innerHeight but for elements
// const pageHeight = window.innerHeight;

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Check when the local host reaches a certain div --> play animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            if (entry.target.className == "robloxContentContainer"){
                document.querySelectorAll(".robloxContentContainer")[0].classList.add('fadeInLeft'); // [0] in this case is the div element 
            }

            else if (entry.target.className == "discordContentContainer"){
                document.querySelectorAll(".discordContentContainer")[0].classList.add('fadeInRight');
            }

            else if (entry.target.className == "cyberstartContentContainer"){
                document.querySelectorAll(".cyberImg")[0].classList.add('fadeFromTop');
                document.querySelectorAll(".cyberImg")[1].classList.add('fadeFromTop');
            }

            else if (entry.target.className == "iconContainer"){
                document.querySelectorAll(".iconContainer")[0].classList.add('expand');
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
document.getElementById('githubIcon').addEventListener("click", function(){
    window.open("https://github.com/Larry-Larriee");
});

document.getElementById('instagramIcon').addEventListener("click", function(){
    window.open("https://www.instagram.com/larry_larriee/");    
});
