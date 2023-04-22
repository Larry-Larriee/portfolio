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

// =============================================================================================================================================
// FUNCTIONS

const detectLogo = (url) => {

    if (url === urlList.about) {
        console.log(url, urlList.about);


        navigationLogo.src = "../images/Hummingbirds/darkcyan_logo.png";
        footerLogo.src = "../images/Hummingbirds/darkcyan_logo.png";
    }
}

// =============================================================================================================================================
// MAINSETUP

detectLogo(window.location.pathname);
