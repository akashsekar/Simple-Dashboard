
const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('#close');
const sideBar = document.querySelector('.left');
const themeToggler = document.querySelector('.theme');



burger.addEventListener('click', () => {
    sideBar.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    sideBar.style.display = 'none';
})


themeToggler.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('a:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('a:nth-child(2)').classList.toggle('active');
})