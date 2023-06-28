let burguer=document.getElementById("burguer");
let mobile=document.querySelectorAll(".mobile")[0];
let menuUlLi=document.querySelectorAll(".menuUlLi");
burguer.addEventListener('click', ()=> {
    mobile.classList.toggle("showMobile");
});

menuUlLi.forEach((elemento)=>{
elemento.addEventListener('click', ()=>{
    mobile.classList.toggle("showMobile");
})
})

