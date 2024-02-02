// =============================================================================================================================================
// VARIABLES

const mobile = document.getElementById("mobile-button");

const links = {
    "cyberlions": {
        "github": document.getElementById("ref-cyberlions-github"),
        "website": document.getElementById("ref-cyberlions-external")
    },
    "ocsef": {
        "github": document.getElementById("ref-ocsef-github"),
        "website": document.getElementById("ref-ocsef-external")
    }, 
    "roblox": {
        "github": document.getElementById("ref-roblox-github"),
        "website": document.getElementById("ref-roblox-external")
    },
    "service": document.getElementById("ref-fiverr")
};

const socialMedia = {
    "discord": document.getElementById("ref-discord"),
    "github": document.getElementById("ref-github"),
    "instagram": document.getElementById("ref-instagram"),
    "linkedin": document.getElementById("ref-linkedin")
}

// =============================================================================================================================================
// FUNCTIONS

const mobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu").classList;

    if (mobileMenu.contains("content-hidden")){
        mobileMenu.remove("content-hidden");
    }
    else{
        mobileMenu.add("content-hidden");
    }
}

const openLink = (link) => {
    window.open(link);
}

// =============================================================================================================================================
// MAINSETUP

mobile.addEventListener("click", mobileMenu);
links.cyberlions.github.addEventListener("click", () => openLink("https://github.com/CyberLions-8521/Robotics-Site"));
links.cyberlions.website.addEventListener("click", () => openLink("https://team8521.com/"));
links.ocsef.github.addEventListener("click", () => openLink("https://github.com/OCSEF-IAT/OCSEF-IAT.github.io"));
links.ocsef.website.addEventListener("click", () => openLink("https://ocsef-iat.github.io/"));
links.roblox.website.addEventListener("click", () => openLink("https://www.roblox.com/games/7218691177/Swamp-Defense-BETA"));

links.service.addEventListener("click", () => openLink("https://www.fiverr.com/larry_larriee/build-you-a-website-and-put-it-on-google-and-the-internet"));

socialMedia.discord.addEventListener("click", () => openLink("https://discord.com/users/490277278136270874"));
socialMedia.github.addEventListener("click", () => openLink("https://github.com/Larry-Larriee"));
socialMedia.instagram.addEventListener("click", () => openLink("https://www.instagram.com/larry_larriee/"));
socialMedia.linkedin.addEventListener("click", () => openLink("https://www.linkedin.com/in/larry-le-94b565244/"));