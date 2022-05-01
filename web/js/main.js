setInterval(slider_auto, 7000);

function slider_auto(){
    //Left values
    var sliderWidthClient = document.getElementById("slider").clientWidth
    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)*3

    var leftActual = parseInt(window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, ""))
    var leftMove = document.getElementById("slide").clientWidth+gap+0.3
    var leftNew = 0

    //Move right
    leftNew = (leftActual - leftMove)
    //! UNFINISHED !//
    //! Tamanho das imagens é proporcional à quantidade de imagens !//
    //! Conseguir el valor left máximo posible independiente de la cantidad de banners !//
    leftMax = sliderWidthClient*(-3.00)
    // leftMax = sliderWidthClient*(-(slider.childElementCount-3))


    if(leftNew < leftMax){
        leftNew = sliderWidthClient*(-0.65)
        //? leftNew = sliderWidthClient*(-0.00)
    }

    slider.style.left = leftNew+"px"
}

function slider_move(x){
    //Left values
    var sliderWidthClient = document.getElementById("slider").clientWidth
    var sliderWidth = document.getElementById("slider").scrollWidth;
    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)

    var leftActual = parseInt(window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, ""))
    var leftMove = sliderWidth/(slider.childElementCount)+gap/2
    var leftNew = 0

    //Go to beginning/Go to end
    if(x.classList.contains("toLast")){
        //! UNFINISHED !//
        //! Tamanho das imagens é proporcional à quantidade de imagens !//
        //! Conseguir el valor left máximo posible independiente de la cantidad de banners !//
        leftNew = sliderWidthClient*(-3.00)

        slider.style.left = leftNew+"px"
        return
    }
    else if(x.classList.contains("toFirst")){
        leftNew = sliderWidthClient*(-0.65)
        slider.style.left = leftNew+"px"
        return
    }

    var bannerCords = x.getBoundingClientRect();
    if(bannerCords.right < screen.width && bannerCords.left > 0){
        //Don't move
        return
    }
    else if(bannerCords.right > window.screen.width){
        //Move right
        leftNew = (leftActual - leftMove)
    }
    else {
        //Move left
        leftNew = (leftActual + leftMove)
    }
    
    slider.style.left = leftNew+"px"
}


// console.log(slider.childElementCount)   //Number of direct childs
// console.log(slider.childNodes.length)   //Number of childs, grandchilds...

// document.getElementById("slider").scrollWidth   //Tamaño real máximo de id=slider