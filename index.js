const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close() {
    mainmenu.style.top = '-100%';
}

document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});
