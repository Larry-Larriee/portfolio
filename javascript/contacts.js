// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const iconWrapper = document.querySelectorAll("#icon");
const skillWrapper = document.getElementsByClassName("skillWrapper")[0];

const logo = document.getElementById("logo");
const footerMainLogo = document.getElementById("footer-hummingbird-logo");

const githubIcon = document.getElementById("github");
const instaIcon = document.getElementById("instagram");
const discordIcon = document.getElementById("discord");
const linkedinIcon = document.getElementById("linkedin");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const spawn_control = {
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                skillWrapper.classList.remove("content_hiding");
                skillWrapper.classList.add('fadeFromBottom');   
            }, 500);
        }
    })
}, spawn_control);

observer.observe(skillWrapper);

// SOCIAL MEDIA ----------------------------------------------------------------------------------------------------------------------------

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

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

// CONTACTS --------------------------------------------------------------------------------------------------------------------------------

iconWrapper[0]?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee")
});

iconWrapper[1]?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/")
});

iconWrapper[2]?.addEventListener("click", () => {
    window.open("https://discordapp.com/users/490277278136270874");
});

iconWrapper[3]?.addEventListener("click", () => {
    window.open("https://www.instagram.com/larry_larriee/");    
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});