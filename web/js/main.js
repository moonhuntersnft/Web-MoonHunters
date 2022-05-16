setInterval(slider_auto, 7000);
function slider_auto() {
    const slider = document.querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    if(sliderIndex == 4) {
        slider.style.setProperty("--slider-index", sliderIndex -3)
        return
    }
    slider.style.setProperty("--slider-index", sliderIndex +1)
}

document.addEventListener("click", e => {
    let handle
    if(e.target.matches(".handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) {
        onHandleClick(handle)
    }
})


function onHandleClick(handle) {
    const slider = document.querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))

    if(handle.classList.contains("left-handle")) {
        if(sliderIndex == 1) {
            slider.style.setProperty("--slider-index", sliderIndex +3)
            return
        }
        slider.style.setProperty("--slider-index", sliderIndex -1)
    }

    if(handle.classList.contains("right-handle")) {
        if(sliderIndex == 4) {
            slider.style.setProperty("--slider-index", sliderIndex -3)
            return
        }
        slider.style.setProperty("--slider-index", sliderIndex +1)
    }
}