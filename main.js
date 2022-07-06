// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const compHistory = document.getElementById('comp-color');
const pageHeight = window.innerHeight;

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Set the page height so the background fills the whole page
function setHeight(){
    
    const navHeight = document.getElementById("navHeader").offsetHeight; // offsetHeight = innerHeight but for elements
    var height = pageHeight - navHeight;

    // This is editing CSS
    document.getElementById('container').style.minHeight = height + "px";
}

function supriseText(){
    var message = "You are awesome if you are reading this";
    document.getElementById('take_a_look').innerHTML = message;
}

/*

function notAvailable(){
    
    // For subpages I believe still need to be worked on before the public can view them
    window.location.replace("/pages/navBar/noAccess.html");
}

*/

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