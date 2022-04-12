function derecha(x){
    //Largura total = left(slider) + img + gap
    
    var imgWidth = x.clientWidth                                                                //Largura imagem

    var slider = document.getElementById("slider")                                              //Valor 'left' de .slider
    var leftValue = window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, "")

    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)*3                   //Valor de 3rem(gap entre imagens)
    
    var newposleft = (parseInt(leftValue) + imgWidth + gap)+"px"                                //Somar ('left' + imagem + gap)

    slider.style.left = newposleft
}

function izquierda(x){
    //Largura total = left(slider) - img - gap
    
    var imgWidth = x.clientWidth                                                                //Largura imagem

    var slider = document.getElementById("slider")                                              //Valor 'left' de .slider
    var leftValue = window.getComputedStyle(slider).getPropertyValue("left").replace(/px/, "")

    var gap = parseInt(getComputedStyle(document.documentElement).fontSize)*3                   //Valor de 3rem(gap entre imagens)
    
    var newposleft = (parseInt(leftValue) - imgWidth - gap)+"px"                                //Subtrair ('left' - imagem - gap)

    slider.style.left = newposleft
}