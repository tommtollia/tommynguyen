const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;
let navopen = false;



menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    if(!navopen){
        navMenu.classList.add('open');
        navopen=true;
    } else {
        navMenu.classList.remove('open');
        navopen = false;
    }
});

document.querySelectorAll(".nav-link,.img-logo,.img-logo_tx").forEach(n=>n.
addEventListener("click",()=>{
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
}))
window.addEventListener("scroll",function(){
    const header = document.querySelector(".container-fluid");
    const navHeader = document.querySelector('.navbarheader');
    header.classList.toggle("navbarheader-box", window.scrollY > 0);
    navHeader.classList.toggle("sticky", window.scrollY > 0);
    navMenu.classList.toggle("sticky", window.scrollY > 0);
})