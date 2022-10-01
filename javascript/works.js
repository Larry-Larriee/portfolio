// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const filterSectionsButtons = document.querySelectorAll(".filter_select_section");
const clickedFilter = "filter_select_section_clicked";
const contentHidden = "content_hidden";

const projectContent = document.querySelectorAll(".work_content_wrapper");
const projectButtons = document.querySelectorAll(".work_content");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Hides all of the projects
function filter_content(){
    for (let content = 0; content < projectContent.length; content += 1){
        projectContent[content].classList.add("content_hidden");
    }
}

function remove_class(nameOfClass, target){
    for (let section = 0; section < target.length; section += 1){
        target[section].classList.remove(nameOfClass);
    }
}

// Note: There are seven buttons but six categories of projects and one featured -------------------------------------------------------

const featured = filterSectionsButtons[0];
const roblox = filterSectionsButtons[1];
const web = filterSectionsButtons[2];
const robotics = filterSectionsButtons[3];
const discord = filterSectionsButtons[4];
const cybersecurity = filterSectionsButtons[5];
const cad = filterSectionsButtons[6];

featured.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    featured.classList.add(clickedFilter);

    // Reveal all projects (wrapper containing all the projects)
    remove_class(contentHidden, projectContent);

    // Hide select projects from the featured section ONLY
    const critiverse = document.getElementById("critiverse");
    
    critiverse.classList.add("content_hidden");
});

roblox.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    roblox.classList.add("filter_select_section_clicked");
    projectContent[0].classList.remove("content_hidden");
    remove_class(contentHidden, projectButtons[0].children); 

});

web.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    web.classList.add("filter_select_section_clicked");
    projectContent[1].classList.remove("content_hidden");

    // Remove the content_hidden class from all the children of the projectButtons[1] element
    remove_class(contentHidden, projectButtons[1].children); 

});

robotics.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    robotics.classList.add("filter_select_section_clicked");
    projectContent[2].classList.remove("content_hidden");
    remove_class(contentHidden, projectButtons[2].children); 

});

discord.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    discord.classList.add("filter_select_section_clicked");
    projectContent[3].classList.remove("content_hidden");
    remove_class(contentHidden, projectButtons[3].children); 

});

cybersecurity.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    cybersecurity.classList.add("filter_select_section_clicked");
    projectContent[4].classList.remove("content_hidden");
    remove_class(contentHidden, projectButtons[4].children); 

});

cad.addEventListener("click", () => {
    remove_class(clickedFilter, filterSectionsButtons);
    filter_content();

    cad.classList.add("filter_select_section_clicked");
    projectContent[5].classList.remove("content_hidden");
    remove_class(contentHidden, projectButtons[5].children); 

});

// Event Listeners ----------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");
const footerMainLogo = document.getElementById("footer-hummingbird-logo");

const githubIcon = document.getElementById("github");
const instaIcon = document.getElementById("instagram");
const discordIcon = document.getElementById("discord");
const linkedinIcon = document.getElementById("linkedin");

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

// Check if the github icon has loaded to prevent null error
githubIcon?.addEventListener("click", () => {
    window.open("https://github.com/Larry-Larriee")
});

linkedinIcon?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/larry-le-94b565244/")
});

discordIcon?.addEventListener("click", () => {
    window.open("https://discordapp.com/users/490277278136270874");
});

instaIcon?.addEventListener("click", () => {
    window.open("https://www.instagram.com/larry_larriee/");    
});

footerMainLogo?.addEventListener("click", () => {
    window.location.replace("/");
});

// MOBILE MENU --------------------------------------------------------------------------------------------------------------------------

const hambuger_icon = document.querySelector('.hamburger_icon');

hambuger_icon?.addEventListener('click', () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle("content_hidden");
});