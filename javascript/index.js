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