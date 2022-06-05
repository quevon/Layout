const main = document.querySelector('#main')
const sideBar = document.querySelector('.side-bar-left-container')


function hideShowNav() {
    main.classList.toggle('active')
    sideBar.classList.toggle('active')
}
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', hideShowNav)
