// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const filterSections = document.querySelectorAll(".filter_select_section");
const projectContent = document.querySelectorAll(".work_content_wrapper");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Allow only one button to be active at a time 
function remove_class(){
    for (let section = 0; section < filterSections.length; section += 1){
        filterSections[section].classList.remove("filter_select_section_clicked");
    }
}

// Hides all of the projects
function filter_content(){
    for (let content = 0; content < projectContent.length; content += 1){
        projectContent[content].classList.add("content_hidden");
    }
}

// Note: There are seven buttons but only six categories of projects ----------------------------------------------------------------------

filterSections[0].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[0].classList.add("filter_select_section_clicked");

    // Reveal all projects
    for (let i = 0; i < projectContent.length; i += 1){
        projectContent[i].classList.remove("content_hidden");
    }
});

filterSections[1].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[1].classList.add("filter_select_section_clicked");
    projectContent[0].classList.remove("content_hidden");
});

filterSections[2].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[2].classList.add("filter_select_section_clicked");
    projectContent[1].classList.remove("content_hidden");
});

filterSections[3].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[3].classList.add("filter_select_section_clicked");
    projectContent[2].classList.remove("content_hidden");
});

filterSections[4].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[4].classList.add("filter_select_section_clicked");
    projectContent[3].classList.remove("content_hidden");
});

filterSections[5].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[5].classList.add("filter_select_section_clicked");
    projectContent[4].classList.remove("content_hidden");
});

filterSections[6].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[6].classList.add("filter_select_section_clicked");
    projectContent[5].classList.remove("content_hidden");
});

// Event Listeners ----------------------------------------------------------------------------------------------------------------------

const logo = document.getElementById("logo");

const githubIcon = document.getElementById("githubIcon");
const instaIcon = document.getElementById("instagramIcon");

logo?.addEventListener("click", () => {
    window.location.replace("/");
});

// Check if the github icon has loaded to prevent null error
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