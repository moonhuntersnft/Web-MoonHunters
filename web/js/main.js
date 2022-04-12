function slider_move(x){
    //Largura total = left(slider) + img + gap
    
    var imgWidth = x.clientWidth                                                                //Largura imagem
    var slider = document.getElementById("slider")                                              //Valor 'left' de .slider
    var leftValue = window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, "")
    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)*3                   //Valor de 3rem(gap entre imagens)
    

    var cords = x.getBoundingClientRect();                                                      //Cordenadas de img no DOM
    if(cords.right < screen.width && cords.left > 0){
        return                                                                                  //Retornar se o slide está no meio da tela
    }
    else if(cords.right > window.screen.width){
        var newposleft = (parseInt(leftValue) - imgWidth - gap)+"px"                            //Focar próximo slide
    }
    else {
        var newposleft = (parseInt(leftValue) + imgWidth + gap)+"px"                            //Focar slide anterior
    }
    slider.style.left = newposleft
}