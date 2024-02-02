// =============================================================================================================================================
// VARIABLES

const navigationLogo = document.getElementById("logo-navigation");
const footerLogo = document.getElementById("logo-footer");

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

// =============================================================================================================================================
// FUNCTIONS

const detectLogo = (url) => {

    if (url === urlList.about) {
        console.log(url, urlList.about);


        navigationLogo.src = "../images/Hummingbirds/darkcyan_logo.png";
        footerLogo.src = "../images/Hummingbirds/darkcyan_logo.png";
    }
}

const returnHome = () => {
    window.location.href = "../index.html";
}

const openLink = (link) => {
    window.open(link);
}

// =============================================================================================================================================
// MAINSETUP

// detectLogo(window.location.pathname);

navigationLogo.addEventListener("click", returnHome);

socialMedia.discord.addEventListener("click", () => openLink("https://discord.com/users/490277278136270874"));
socialMedia.github.addEventListener("click", () => openLink("https://github.com/Larry-Larriee"));
socialMedia.instagram.addEventListener("click", () => openLink("https://www.instagram.com/larry_larriee/"));
socialMedia.linkedin.addEventListener("click", () => openLink("https://www.linkedin.com/in/larry-le-94b565244/"));