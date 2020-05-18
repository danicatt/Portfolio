const mainNav = document.querySelector('.main-nav');
const navBarToggle = document.querySelector('.navbar-toggle');

navBarToggle.addEventListener('click', function () {
   mainNav.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (window.scrollY >= 510) {
        navBarToggle.style.backgroundColor = '#bdc0d3';
        mainNav.style.backgroundColor = '#bdc0d3';
    } else {
    if (window.scrollY <= 509) {
        navBarToggle.style.backgroundColor = 'transparent';
        mainNav.style.backgroundColor = '#011627';
    }
}});

