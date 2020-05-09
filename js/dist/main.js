const mainNav = document.querySelector('.main-nav');
const navBarToggle = document.querySelector('.navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (window.scrollY >= 440) {
        document.querySelector('.navbar-toggle').style.backgroundColor = '#ffe401';
        document.querySelector('.main-nav').style.backgroundColor = '#ffe401';
    } else {
    if (window.scrollY <= 439) {
        document.querySelector('.navbar-toggle').style.backgroundColor = 'transparent';
        document.querySelector('.main-nav').style.backgroundColor = 'transparent';
    }
}});
