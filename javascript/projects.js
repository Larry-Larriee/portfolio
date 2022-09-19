// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

const project_header_title = document.querySelector(".project_header_title");
const project_header_description = document.querySelector(".project_description_introduction");

// BACKGROUND AUTOPLAY ------------------------------------------------------------------------------------------------------------------

var background = document.querySelector("video");
const project_sections = document.querySelectorAll(".project_section_wrapper");

const controls = {
    rootMargin: "-150px 0px 0px 0px"
};

const background_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            if (background === document.querySelector("video")){
                
                background.play(); // Play the video and have top header animations
                
                project_header_title.classList.add("fadeInLeft");
                project_header_description.classList.add("fadeInRight");
            }
            else if (background === document.getElementById("background_image")){

                project_header_title.classList.add("fadeInLeft");
                project_header_description.classList.add("fadeInRight");
            }
        }

        else {
            if (background === document.querySelector("video")){
                background.pause();
                background.currentTime = 0; // Reset video (for black screen) and remove top header animations to reuse again later if needed
            }
            else if (background === document.getElementById("background_image")){
                project_header_title.classList.remove("fadeInLeft");
                project_header_description.classList.remove("fadeInRight");
            }
        }
    });
}, controls);


if (background){
    background_observer.observe(background);
}
else{
    var background = document.getElementById("background_image");
    background_observer.observe(background);
}
// PAGE INTERSECTION OBSERVER -----------------------------------------------------------------------------------------------------------

const content_options = {
    rootMargin: "0% 0% -30% 0%" /* 0% top, 0% right, -30% bottom, 0% left */
                                /* target element is +30% when the bottom of the target element touching top of parent */
};

const content_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            // Add animation for all children in content section
            for (let i = 0; i < entry.target.children.length; i += 1){

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

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

// Open social media links in new tab
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon?.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});