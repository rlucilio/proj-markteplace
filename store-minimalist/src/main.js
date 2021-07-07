
const menu = document.querySelector('#menu');
const btnShowMenu = document.querySelector('#btn-show-menu');
const btnHideMenu = document.querySelector('#btn-hide-menu');

btnShowMenu.addEventListener('click', (ev) => {
    ev.stopPropagation();
    menu.classList.remove('menu-nav--hide-menu');
    menu.classList.add('menu-nav--show-menu');
})

btnHideMenu.addEventListener('click', (ev) => {
    ev.stopPropagation();
    menu.classList.add('menu-nav--hide-menu');
    menu.classList.remove('menu-nav--show-menu');
})
