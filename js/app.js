const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }

});
const menuToggle = document.querySelector('.menu-toggle');
const fullscreenMenu = document.querySelector('.fullscreen-menu');

menuToggle.addEventListener('click', () => {

    menuToggle.classList.toggle('active');
    fullscreenMenu.classList.toggle('active');

});
const menuClose = document.querySelector('.menu-close');

menuClose.addEventListener('click', () => {

    menuToggle.classList.remove('active');
    fullscreenMenu.classList.remove('active');

});
const faqItems =
document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const button =
    item.querySelector('.faq-question');

    button.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});