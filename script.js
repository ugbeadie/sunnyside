const burger = document.getElementsByClassName('burger')[0]
const navUl = document.getElementsByClassName('nav-items')[0];

burger.addEventListener('click', () =>{
    navUl.classList.toggle('active');
})

// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 400;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })