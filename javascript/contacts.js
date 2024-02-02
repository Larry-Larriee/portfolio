// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const iconWrapper = document.querySelectorAll("#icon");
const skillWrapper = document.getElementsByClassName("skillWrapper")[0];

const logo = document.getElementById("logo");
const footerMainLogo = document.getElementById("footer-hummingbird-logo");

const urlList = {
    "home": "/",
    "about": "/about.html",
    "works": "/works.html",
    "contacts": "/contacts.html"
}

const socialMedia = {
    "discord": document.getElementById("ref-discord"),
    "github": document.getElementById("ref-github"),
    "instagram": document.getElementById("ref-instagram"),
    "linkedin": document.getElementById("ref-linkedin")
}

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

skillWrapper.classList.add("content_hiding");
observer.observe(skillWrapper);

const openLink = (link) => {
    window.open(link);
}

const detectLogo = (url) => {

    if (url === urlList.contacts) {
        console.log(url, urlList.contacts);

        logo.src = "../images/Hummingbirds/bluer_logo.png";
        footerMainLogo.src = "../images/Hummingbirds/bluer_logo.png";
    }
}

// detectLogo(window.location.pathname);

// SOCIAL MEDIA ----------------------------------------------------------------------------------------------------------------------------

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

// Optional Chaining
socialMedia.discord?.addEventListener("click", () => openLink("https://discord.com/users/490277278136270874"));
socialMedia.github?.addEventListener("click", () => openLink("https://github.com/Larry-Larriee"));
socialMedia.instagram?.addEventListener("click", () => openLink("https://www.instagram.com/larry_larriee/"));
socialMedia.linkedin?.addEventListener("click", () => openLink("https://www.linkedin.com/in/larry-le-94b565244/"));

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});