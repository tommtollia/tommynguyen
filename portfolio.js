window.addEventListener("scroll",function(){
    const nextbTn = document.querySelector(".nextbtn");
    const prevbTn = document.querySelector(".prevbtn");


    nextbTn.classList.toggle("reveal", window.scrollY > 0);
    prevbTn.classList.toggle("reveal", window.scrollY > 0);
})