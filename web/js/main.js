setInterval(slider_auto, 7000);

function slider_auto(){
    //Left values
    var sliderWidthClient = document.getElementById("slider").clientWidth
    var sliderWidth = document.getElementById("slider").scrollWidth;
    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)

    var leftActual = parseInt(window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, ""))
    var leftMove = sliderWidth/(slider.childElementCount)+gap/2
    var leftNew = 0

    //Move right
    leftNew = (leftActual - leftMove)+"px"

    //Move beginning
    //! UNFINISHED !//
    //! Conseguir el valor left máximo posible independiente de la cantidad de banners !//
    leftMax = sliderWidthClient*(-3.00)
    if(leftNew.replace(/px/,"") < leftMax){
        leftNew = sliderWidthClient*(-0.65)+"px"
    }

    slider.style.left = leftNew
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
        //! Conseguir el valor left máximo posible independiente de la cantidad de banners !//
        leftNew = sliderWidthClient*(-3.00)+"px"
        slider.style.left = leftNew
        return
    }
    else if(x.classList.contains("toFirst")){
        leftNew = sliderWidthClient*(-0.65)+"px"
        slider.style.left = leftNew
        return
    }

    var bannerCords = x.getBoundingClientRect();
    if(bannerCords.right < screen.width && bannerCords.left > 0){
        //Don't move
        return
    }
    else if(bannerCords.right > window.screen.width){
        //Move right
        leftNew = (leftActual - leftMove)+"px"
    }
    else {
        //Move left
        leftNew = (leftActual + leftMove)+"px"
    }
    
    slider.style.left = leftNew
}


// console.log(slider.childElementCount)   //Number of direct childs
// console.log(slider.childNodes.length)   //Number of childs, grandchilds...