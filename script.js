let pantalla= document.querySelector("canvas");
let pincel= pantalla.getContext("2d")
pincel.fillStyle= "red";
pincel.strokeStyle = "blue";
pincel.moveTo(90,130);
pincel.lineTo(210,130);
pincel.moveTo(150,130)
pincel.lineTo(150,30);
pincel.moveTo(150,30);
pincel.lineTo(220,30);
pincel.moveTo(220,30);
pincel.lineTo(220,45);
pincel.stroke();

var cuerpo = document.querySelector("body")

cuerpo.addEventListener("keydown", function(event){
    console.log("Tecla presionada, " + event.key);
    if( event.key == "m"){
        dibujarLineasPalabra(palabraAleatoria.toUpperCase(), event.key);
    }
    if (event.key == "e"){
        colocarLetra(event.key);
    }
})

var listaPalabras= ["hola","jorge","pedro","piña","golpe","nahuelon"];
var palabraAleatoria= listaPalabras[Math.round(Math.random()*(listaPalabras.length-1))];

function dibujarLineasPalabra(palabraAleatoria){
    var contenedor = document.querySelector(".palabra-oculta");
    for(i = 0; i < palabraAleatoria.length ; i++){
        var divHijo = document.createElement("div");
        var lineaHijo = document.createElement("img");
        var pHijo = document.createElement("p");
        lineaHijo.src = "img/linea.png";
        lineaHijo.classList.add("linea");
        divHijo.classList.add("letra");
        pHijo.textContent = palabraAleatoria[i];
        pHijo.id = "letra" + i;
        divHijo.appendChild(lineaHijo);
        divHijo.appendChild(pHijo);
        contenedor.appendChild(divHijo);
    }
}
function colocarLetra(letraIngresada){
    for(i = 0; i < palabraAleatoria.length; i++){
        letraOculta = document.querySelector("#letra"+i)
        letraComparar = letraOculta.innerHtml;
        if (letraIngresada.toUpperCase() == letraComparar){
            letraOculta.style.display = "show";
        }
    }
}