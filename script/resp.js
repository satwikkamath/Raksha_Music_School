let burger = document.querySelector('.burger');
let snavbar = document.querySelector('.snavbar');
let navlist = document.querySelector('.navlist');
let loc = document.querySelector('.loc');
let logo = document.querySelector('.logo');

burger.addEventListener('click', ()=>{
    
    snavbar.classList.toggle('m-nav');
    navlist.classList.toggle('v-class');
    loc.classList.toggle('v-class');
    // logo.classList.toggle('v-class');
})
