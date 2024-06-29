// Load redirect value from localStorage on script initialization
let redirect = localStorage.getItem('redirect') || '';

function diffPageLink(event) {
    var page_title = document.title;
    var href = event.target.getAttribute("href");
    window.location.href = href;
}

function toggleMenu(event) {
    var ham_menu = document.getElementById("hamburger-menu");
    ham_menu.classList.toggle("show");
    if (event) {
        diffPageLink(event);
    }
}
