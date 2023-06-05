const emailMenu   = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu  = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')

emailMenu.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)

function toggleDesktopMenu(){
   desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive')     
}