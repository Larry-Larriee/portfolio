// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

const filterSections = document.querySelectorAll(".filter_select_section");
const projectContent = document.querySelectorAll(".work_content_wrapper");

// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Allow only one button to be active at a time 
function remove_class(){
    for (var section = 0; section < filterSections.length; section += 1){
        filterSections[section].classList.remove("filter_select_section_clicked");
    }
}

// Hides all of the projects
function filter_content(){
    for (var content = 0; content < projectContent.length; content += 1){
        projectContent[content].classList.add("work_content_hidden");
    }
}

// Note: There are seven buttons but only six categories of projects ----------------------------------------------------------------------

filterSections[0].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[0].classList.add("filter_select_section_clicked");

    // Reveal all projects
    for (var i = 0; i < projectContent.length; i += 1){
        projectContent[i].classList.remove("work_content_hidden");
    }
});

filterSections[1].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[1].classList.add("filter_select_section_clicked");
    projectContent[0].classList.remove("work_content_hidden");
});

filterSections[2].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[2].classList.add("filter_select_section_clicked");
    projectContent[1].classList.remove("work_content_hidden");
});

filterSections[3].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[3].classList.add("filter_select_section_clicked");
    projectContent[2].classList.remove("work_content_hidden");
});

filterSections[4].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[4].classList.add("filter_select_section_clicked");
    projectContent[3].classList.remove("work_content_hidden");
});

filterSections[5].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[5].classList.add("filter_select_section_clicked");
    projectContent[4].classList.remove("work_content_hidden");
});

filterSections[6].addEventListener("click", () => {
    remove_class();
    filter_content();

    filterSections[6].classList.add("filter_select_section_clicked");
    projectContent[5].classList.remove("work_content_hidden");
});