// =============================================================================================================================================
// VARIABLES

const mobile = document.getElementById("mobile-button");

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

// =============================================================================================================================================
// MAINSETUP

mobile.addEventListener("click", mobileMenu);