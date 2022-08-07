// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const pageHeight = window.innerHeight;

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Set the page height so the background fills the whole page
function setHeight(){
    
    const navHeight = document.getElementById("navHeader").offsetHeight; // offsetHeight = innerHeight but for elements
    var height = pageHeight - navHeight;

    // This is editing CSS
    document.getElementById('container').style.minHeight = height + "px";
}

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

// Open social media links in new tab
document.getElementById('githubIcon').addEventListener("click", function(){
    window.open("https://github.com/Larry-Larriee");
});

document.getElementById('instagramIcon').addEventListener("click", function(){
    window.open("https://www.instagram.com/larry_larriee/");    
});

// When the user clicks a key, it sends the key to the server and runs the function below
document.onkeydown = function(key) {

    // key property (char name)
    if (key.key == "Enter") {
        window.alert("Secret Message: Hello :)");
    }
}