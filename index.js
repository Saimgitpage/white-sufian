const mobileNav = document.querySelector('.mobile-nav i');
const navOps = document.querySelector('.nav-ops');

mobileNav.addEventListener('click', ()=>{
    navOps.classList.toggle('active');
})