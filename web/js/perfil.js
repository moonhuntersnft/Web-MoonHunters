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
        if(sliderIndex == 0) {
            return
        }
        slider.style.setProperty("--slider-index", sliderIndex -1)
    }

    if(handle.classList.contains("right-handle")) {
        if(sliderIndex == 2) {
            return
        }
        slider.style.setProperty("--slider-index", sliderIndex +1)
    }
}