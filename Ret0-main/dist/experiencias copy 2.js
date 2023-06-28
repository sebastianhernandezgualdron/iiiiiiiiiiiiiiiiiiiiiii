const slider4 = document.getElementById("sliderImg4");
primeraImg = slider4.querySelectorAll("div")[0];
flechasIcon3 = document.querySelectorAll("#sliderContainer4 i")

let movimientoInicio3 = false, enMovi3 = false, prevPageX3, prevScrollLeft3, cambiarPos3;


const mostarIconos4 = () =>{
    let scrollWidth4 = slider4.scrollWidth -slider4.clientWidth;
    flechasIcon3[0].style.display = slider4.scrollLeft == 0 ? "block" : "block"
    flechasIcon3[1].style.display = slider4.scrollLeft == scrollWidth4 ? "block" : "block"
}

flechasIcon3.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider4.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos4(), 60);
    })
    
});

const autoMov3 = () => {
    if(slider4.scrollLeft == (slider4.scrollWidth - slider4.clientWidth)) return;
    cambiarPos3 = Math.abs(cambiarPos3);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos3

    if(slider4.scrollLeft >prevScrollLeft3){
        return slider4.scrollLeft += cambiarPos3 > primeraImgWidth / 3 ? calcPos : -cambiarPos3
    }
    slider4.scrollLeft -= cambiarPos3 > primeraImgWidth / 3 ? calcPos : -cambiarPos3
}

const movInicio3 = (e) =>{
    movimientoInicio3 = true;
    prevPageX3 = e.pageX || e.touches[0].pageX;
    prevScrollLeft3 = slider4.scrollLeft
}

const movimiento3 = (e) => {
    if(!movimientoInicio3) return;
    e.preventDefault()
    enMovi = true;
    slider4.classList.add("mov")
    cambiarPos3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
    slider4.scrollLeft = prevScrollLeft3 - cambiarPos3;
    mostarIconos4 ();
}

const movFinal3 =() => {
    movimientoInicio3 = false;
    slider4.classList.remove("mov")
    if(!enMovi3) return;
    enMovi3 = false;
    mostarIconos4 ();
    autoMov3 ();
}

slider4.addEventListener("mousemove", movimiento3);
slider4.addEventListener("touchmove", movimiento3);

slider4.addEventListener("mousedown", movInicio3);
slider4.addEventListener("touchstart", movInicio3);

slider4.addEventListener("mouseup", movFinal3);
slider4.addEventListener("mouseleave", movFinal3);
slider4.addEventListener("touchend", movFinal3);