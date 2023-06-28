const slider3 = document.getElementById("sliderImg2");
primeraImg = slider3.querySelectorAll("div")[0];
flechasIcon2 = document.querySelectorAll("#sliderContainer2 i")

let movimientoInicio2 = false, enMovi2 = false, prevPageX2, prevScrollLeft2, cambiarPos2;


const mostarIconos2 = () =>{
    let scrollWidth2 = slider3.scrollWidth -slider3.clientWidth;
    flechasIcon2[0].style.display = slider3.scrollLeft == 0 ? "block" : "block"
    flechasIcon2[1].style.display = slider3.scrollLeft == scrollWidth2 ? "block" : "block"
}

flechasIcon2.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider3.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos2(), 60);
    })
    
});

const autoMov2 = () => {
    if(slider3.scrollLeft == (slider3.scrollWidth - slider3.clientWidth)) return;
    cambiarPos2 = Math.abs(cambiarPos2);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos2

    if(slider3.scrollLeft >prevScrollLeft2){
        return slider3.scrollLeft += cambiarPos2 > primeraImgWidth / 3 ? calcPos : -cambiarPos2
    }
    slider3.scrollLeft -= cambiarPos2 > primeraImgWidth / 3 ? calcPos : -cambiarPos2
}

const movInicio2 = (e) =>{
    movimientoInicio2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = slider3.scrollLeft
}

const movimiento2 = (e) => {
    if(!movimientoInicio2) return;
    e.preventDefault()
    enMovi2 = true;
    slider3.classList.add("mov")
    cambiarPos2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    slider3.scrollLeft = prevScrollLeft2 - cambiarPos2;
    mostarIconos2 ();
}

const movFinal2 =() => {
    movimientoInicio2 = false;
    slider3.classList.remove("mov")
    if(!enMovi2) return;
    enMovi2 = false;
    mostarIconos2 ();
    autoMov2 ();
}

slider3.addEventListener("mousemove", movimiento2);
slider3.addEventListener("touchmove", movimiento2);

slider3.addEventListener("mousedown", movInicio2);
slider3.addEventListener("touchstart", movInicio2);

slider3.addEventListener("mouseup", movFinal2);
slider3.addEventListener("mouseleave", movFinal2);
slider3.addEventListener("touchend", movFinal2);