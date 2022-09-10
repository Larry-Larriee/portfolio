// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

const background_video = document.querySelector("video");
const project_sections = document.querySelectorAll(".project_section_wrapper");

// BACKGROUND AUTOPLAY ------------------------------------------------------------------------------------------------------------------

const video_controls = {
    rootMargin: "-150px 0px 0px 0px"
};

const video_observer = new IntersectionObserver((entries) => {
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

video_observer.observe(background_video);

const content_options = {
    rootMargin: "0% 0% -30% 0%" /* 0% top, 0% right, -30% bottom, 0% left */
                                /* target element is +30% when the bottom of the target element touching top of parent */
};

const content_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            // Add animation for all children in content section
            for (var i = 0; i < entry.target.children.length; i += 1){

                /* Must hide content if we use -50% as we dont want animation to play AFTER content already visible */
                entry.target.children[i].classList.remove("content_hidden");

                entry.target.children[i].classList.add("fadeFromBottom");
            }
        }
    });
}, content_options);

content_observer.observe(project_sections[0]);
content_observer.observe(project_sections[1]);
content_observer.observe(project_sections[2]);

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