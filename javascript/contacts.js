// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

const iconWrapper = document.querySelectorAll("#icon");

const logo = document.getElementById("logo");

const skillWrapper = document.getElementsByClassName("skillWrapper")[0];
const let_me_know_button = document.querySelector("#letMeKnowButton")

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

const spawn_control = {
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            switch (entry.target.id){

                case "skillWrapper":
                    skillWrapper.classList.remove("content_hiding");
                    skillWrapper.classList.add('fadeFromBottom');
                    break;
                
                case "letMeKnowButton":
                    let_me_know_button.classList.remove("content_hiding");
                    let_me_know_button.classList.add('fadeIn');
                    break;

                // no default
            }    
        }
    })
}, spawn_control);

observer.observe(skillWrapper);
observer.observe(let_me_know_button);

logo.addEventListener("click", () => {
    window.location.replace("/");
})

// SOCIAL MEDIA ----------------------------------------------------------------------------------------------------------------------------

// Open social media links in new tab
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee");
});

instaIcon?.addEventListener("click", () =>{
    window.open("https://www.instagram.com/larry_larriee/");    
});

// CONTACTS --------------------------------------------------------------------------------------------------------------------------------

iconWrapper[0]?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee")
});

iconWrapper[1]?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/")
});

iconWrapper[2]?.addEventListener("click", () => {
    window.open("https://discordapp.com/users/490277278136270874");
});

iconWrapper[3]?.addEventListener("click", () => {
    window.open("https://www.instagram.com/larry_larriee/");    
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});