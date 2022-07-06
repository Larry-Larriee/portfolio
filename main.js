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
    var message = "virus() in console";
    document.getElementById('take_a_look').innerHTML = message;
}

function virus(){
    open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return "bye bye";
}

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