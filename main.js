// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const compHistory = document.getElementById('comp-color');

const pageHeight = window.innerHeight;
const navHeight = 60.8

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Set the page height so the background fills the whole page
function setHeight(){
    var height = pageHeight - navHeight;

    // This is editing CSS
    document.getElementById('container').style.minHeight = height + "px";
}

setHeight();

// EVENT LISTENERS ----------------------------------------------------------------------------------------------------------------------

// When the user clicks a key, it sends the key to the server and runs the function below
document.onkeydown = function(key) {

    // key property (char name)
    if (key.key == "Enter") {
        window.alert("Secret Message: Hello :D");
    }
}

/*
window.onscroll = function (event) {  

    // Get the scroll position of the page
    var scroll = window.pageYOffset;

    // Next Goals: Work on fade in/out text
    var opacity = compHistory.style.opacity = 0.5;    

    if (scroll >= 190){
        compHistory.style.color = "black";
    }
    else{
        compHistory.style.color = "white";
    }
} */