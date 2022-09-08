// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

const background_video = document.querySelector("video");

// BACKGROUND AUTOPLAY ------------------------------------------------------------------------------------------------------------------

const video_controls = {
    rootMargin: "-150px 0px 0px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            background_video.autoplay = true;
            background_video.play();
        } else {
            background_video.pause();
            background_video.currentTime = 0;
        } 

    });
}, video_controls);

observer.observe(background_video);

// EVENT LISTENERS -----------------------------------------------------------------------------------------------------------------------

logo.addEventListener("click", () => {
    window.location.replace("/");
});

// Open social media links in new tab
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon?.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});