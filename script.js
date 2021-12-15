const primaryNav = document.querySelector(".primary-nav");       //mobile nav
const navToggle = document.querySelector(".mobile-nav-button");  //button for showing and hiding mobile nav

//toggles mobile navbar
function toggleNav() {
    const visibility = primaryNav.getAttribute('data-visible');
    navToggle.classList.toggle("active");

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
    }
}