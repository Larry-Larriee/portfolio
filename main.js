// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// offsetHeight = innerHeight but for elements
// const pageHeight = window.innerHeight;

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Check when the local host reaches a certain div --> play animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            if (entry.target.className == "robloxHistory"){
                document.querySelectorAll(".robloxContentContainer")[0].classList.add('fadeInLeft'); // [0] in this case is the div element 
            }

            else if (entry.target.className == "discordHistory"){
                document.querySelectorAll(".discordContentContainer")[0].classList.add('fadeInRight');
            }

            else if (entry.target.className == "cyberStart"){
                document.querySelectorAll(".cyberstartContentContainer")[0].classList.add('fadeInLeft');
            }
        }
    })
});

observer.observe(document.querySelector('.robloxHistory'));
observer.observe(document.querySelector('.discordHistory'));
observer.observe(document.querySelector('.cyberStart'));

// EVENT LISTENERS ----------------------------------------------------------------------------------------------------------------------

// SOCIAL MEDIA -------------------------------------------------------------------------------------------------------------------------

// Open social media links in new tab
document.getElementById('githubIcon').addEventListener("click", function(){
    window.open("https://github.com/Larry-Larriee");
});

document.getElementById('instagramIcon').addEventListener("click", function(){
    window.open("https://www.instagram.com/larry_larriee/");    
});
