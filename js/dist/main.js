const mainNav = document.querySelector('.main-nav');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 780) {
        mainNav.style.display = 'flex';
        mainNav.style.backgroundColor = '#f0cc98';
        mainNav.style.justifyContent = 'center';
    } else {
    if (window.scrollY <= 779) {
        mainNav.style.display = 'none';
    }
}});

