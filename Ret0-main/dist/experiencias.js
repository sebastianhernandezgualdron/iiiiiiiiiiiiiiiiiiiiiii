const slider2 = document.getElementById("sliderImg");
primeraImg = slider2.querySelectorAll("div")[0];
flechasIcon = document.querySelectorAll("#sliderContainer i")

let movimientoInicio = false, enMovi = false, prevPageX, prevScrollLeft, cambiarPos;


const mostarIconos = () =>{
    let scrollWidth = slider2.scrollWidth -slider2.clientWidth;
    flechasIcon[0].style.display = slider2.scrollLeft == 0 ? "block" : "block"
    flechasIcon[1].style.display = slider2.scrollLeft == scrollWidth ? "block" : "block"
}

flechasIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        let primeraImgWidth = primeraImg.clientWidth + 40.2;
        slider2.scrollLeft += icon.id == "iconL" ? -primeraImgWidth : primeraImgWidth;
        setTimeout(() => mostarIconos(), 60);
    })
    
});

const autoMov = () => {
    if(slider2.scrollLeft == (slider2.scrollWidth - slider2.clientWidth)) return;
    cambiarPos = Math.abs(cambiarPos);
    let primeraImgWidth = primeraImg.clientWidth +  40.2;
    let calcPos = primeraImgWidth - cambiarPos

    if(slider2.scrollLeft >prevScrollLeft){
        return slider2.scrollLeft += cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
    }
    slider2.scrollLeft -= cambiarPos > primeraImgWidth / 3 ? calcPos : -cambiarPos
}

const movInicio = (e) =>{
    movimientoInicio = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider2.scrollLeft
}

const movimiento = (e) => {
    if(!movimientoInicio) return;
    e.preventDefault()
    enMovi = true;
    slider2.classList.add("mov")
    cambiarPos = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider2.scrollLeft = prevScrollLeft - cambiarPos;
    mostarIconos ();
}

const movFinal =() => {
    movimientoInicio = false;
    slider2.classList.remove("mov")
    if(!enMovi) return;
    enMovi = false;
    mostarIconos ();
    autoMov ();
}

slider2.addEventListener("mousemove", movimiento);
slider2.addEventListener("touchmove", movimiento);

slider2.addEventListener("mousedown", movInicio);
slider2.addEventListener("touchstart", movInicio);

slider2.addEventListener("mouseup", movFinal);
slider2.addEventListener("mouseleave", movFinal);
slider2.addEventListener("touchend", movFinal);
