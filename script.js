const main = document.querySelector('#main');
const sideBar = document.querySelector('.side-bar-left-container');
const container = document.querySelector('.container');

function hideShowNav() {
    main.classList.toggle('active');
    sideBar.classList.toggle('active');
    container.classList.toggle('active');
}
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', hideShowNav);
