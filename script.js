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
var boton = document.querySelector("#boton-nuevoJuego");
var palabraAleatoria;
boton.onclick = empezarJuego;


var listaPalabras= ["hola","jorge","pedro","piña","golpe","nahuelon"];


function dibujarLineasPalabra(palabraAleatoria){
    var contenedorLetra = document.querySelector(".palabra-oculta");
    for(i = 0; i < palabraAleatoria.length ; i++){
        var divHijo = document.createElement("div");
        var pHijo = document.createElement("p");
        var lineaHijo = document.createElement("img");
        divHijo.classList.add("letra");
        lineaHijo.classList.add("lineaLetra");
        lineaHijo.src = "img/linea.png";
        pHijo.id = "letra" + i;
        pHijo.textContent = palabraAleatoria[i].toUpperCase();
        divHijo.appendChild(lineaHijo);
        divHijo.appendChild(pHijo);
        contenedorLetra.appendChild(divHijo);
    }
}
function colocarLetra(letraIngresada){
    for(i = 0; i < palabraAleatoria.length; i++){
        var letraOculta = document.querySelector("#letra"+i);
        var letraComparar = letraOculta.textContent;
        console.log(letraIngresada);
        console.log(letraOculta);
        if (letraIngresada.toUpperCase() == letraComparar){
            letraOculta.style.visibility= 'visible';
        }
    }
}
function empezarJuego(){
    palabraAleatoria= listaPalabras[Math.round(Math.random()*(listaPalabras.length-1))];
    dibujarLineasPalabra(palabraAleatoria);
    cuerpo.addEventListener("keydown", function(event){
        console.log("Tecla presionada, " + event.key);
        if( event.key == "m"){
            dibujarLineasPalabra(palabraAleatoria.toUpperCase(), event.key);
        }else{
            colocarLetra(event.key);
        }
    })
}