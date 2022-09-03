// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

const iconWrapper = document.querySelectorAll("#icon");

const logo = document.getElementById("logo");
const skillWrapper = document.getElementsByClassName("skillWrapper")[0];

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".skillWrapper")[0].classList.add('fadeFromBottom');
        }
    })
});

observer.observe(skillWrapper);

logo.addEventListener("click", () => {
    window.location.replace("/");
})

// SOCIAL MEDIA ----------------------------------------------------------------------------------------------------------------------------

// Open social media links in new tab
githubIcon.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

// CONTACTS --------------------------------------------------------------------------------------------------------------------------------

iconWrapper[0].addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee")
});

iconWrapper[1].addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/")
});

iconWrapper[2].addEventListener("click", () => {
    window.open("https://discordapp.com/users/490277278136270874");
});

iconWrapper[3].addEventListener("click", () => {
    window.open("https://www.instagram.com/larry_larriee/");    
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});