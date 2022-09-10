window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.l-contentreveal,.b-contentreveal, .r-contentreveal');

    for(let i= 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 170;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('scroll_on');
        }
        else{
            reveals[i].classList.remove('scroll_on');
        }
    }

}

window.addEventListener("scroll",function(){
    const skipbtn = document.querySelector(".btn_reveal");

        skipbtn.classList.toggle("reveal", window.scrollY > 0);
})