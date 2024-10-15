var nave = {
    left: 450,
    top: 620
};

var aliens = [
    {left: 350, top: 200},
    {left: 450, top: 175},
    {left: 150, top: 300},
    {left: 750, top: 175},
    {left:  50, top:  50},
    {left: 600, top: 400},
]

function dibujaNave(){
    contenido = "<div class='nave' style='left:"+nave.left+"px; top:"+nave.top+"px'></div>";
    document.getElementById("naves").innerHTML = contenido;
}

function dibujaAliens(){
    contenido = "";
    console.log(aliens);
    for(var x = 0; x <aliens.length; x ++){
            contenido += "<div class='alien' style='left:"+aliens[x].left+"px; top:"+aliens[x].top+"px'></div>";

    }
    document.getElementById("aliens").innerHTML = contenido;
}

dibujaNave();
dibujaAliens();

document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode === 37 && nave.left > -10){ //Izquierda
        nave.left -= 10;
    }

    if(e.keyCode === 39 && nave.left < 800){ //Derecha
        nave.left += 10;
    }

    if(e.keyCode === 38 && nave.top > 450){ //Arriba
        nave.top -= 10;
    }
    
    if(e.keyCode === 40 && nave.top < 620){ //Abajo
        nave.top += 10;
        console.log(nave.top)
    }
    

    dibujaNave();
}

