function empezarJuego(){
    palabraAleatoria= listaPalabras[Math.floor(Math.random()*(listaPalabras.length-1))];
    botonJugar.disabled = true;
    botonRendirse.disabled = false;
    avisoFinal.textContent ="";
    pincel.clearRect(204,44,32,72);
    intentos=6;
    dibujarLineasPalabra(palabraAleatoria);
    cuerpo.onkeydown = comprobarLetra;
}
function rendirse(){
    avisoFinal.textContent = `Fin del juego, la palabra era ${palabraAleatoria}`;
    cuerpo.onkeydown ="";
    mostrarPalabra();
    botonJugar.disabled = false;
    botonRendirse.disabled = true;
}
function dibujarLineasPalabra(palabraAleatoria){
    var contenedorLetra = document.querySelector(".palabra-oculta");
    for(i = 0; i < palabraAleatoria.length ; i++){
        let divHijo = document.createElement("div");
        let pHijo = document.createElement("p");
        let lineaHijo = document.createElement("img");
        divHijo.classList.add("letra");
        lineaHijo.classList.add("lineaLetra");
        lineaHijo.src = "img/linea.png";
        pHijo.id = "letra" + i;
        pHijo.style.visibility = "hidden";
        pHijo.textContent = palabraAleatoria[i].toUpperCase();
        divHijo.appendChild(lineaHijo);
        divHijo.appendChild(pHijo);
        contenedorLetra.appendChild(divHijo);
    }
}
function eliminarLineasPalabra(){
    for (i=0;i<palabraAleatoria.length;i++){
        let divHijo = document.querySelector(".letra");
        divHijo.remove();
    }
}
function dibujarCuerpo(parte){
    pincel.beginPath();
    switch (parte) {
        case 5:
            pincel.arc(220,55,10,0,2*3.14);
            pincel.stroke();
            break;
        case 4:
            pincel.moveTo(220,65);
            pincel.lineTo(220,95);
            pincel.stroke();
            break;
        case 3:
            pincel.moveTo(220,65);
            pincel.lineTo(205,85);
            pincel.stroke();
            break;
        case 2:
            pincel.moveTo(220,65);
            pincel.lineTo(235,85);
            pincel.stroke();
            break;
        case 1:
            pincel.moveTo(220,95);
            pincel.lineTo(205,115);
            pincel.stroke();
            break;
        case 0:
            pincel.moveTo(220,95);
            pincel.lineTo(235,115);
            pincel.stroke();
            break;
    }
}
function mostrarPalabra(){
    for(i = 0; i < palabraAleatoria.length; i++){
        let letraOculta = document.querySelector("#letra"+i);
        letraOculta.style.visibility= 'visible';
    }
}
function comprobarLetra(event){
    let acierto = false;
    for(i = 0; i < palabraAleatoria.length; i++){
        let letraOculta = document.querySelector("#letra"+i);
        let letraComparar = letraOculta.textContent;
        if (event.key.toUpperCase() == letraComparar){
            letraOculta.style.visibility= 'visible';
            acierto= true;
        }
    }
    if (!acierto){
        if (comprobarDerrota()){
            return;
        }
    }
    comprobarVictoria();
}
function comprobarDerrota(){
    intentos-=1;
    dibujarCuerpo(intentos);
    if (intentos==0){
        avisoFinal.textContent = `Fin del juego, la palabra era ${palabraAleatoria}`;
        cuerpo.onkeydown = "";
        botonJugar.disabled = false;
        botonRendirse.disabled = true;
        return true;
    }
}
function comprobarVictoria(){
    for(i=0; i<palabraAleatoria.length;i++){
        let visible = document.querySelector("#letra"+i);
        if (visible.style.visibility == "hidden"){
            return;
        }
    }
    avisoFinal.textContent=`Ganaste, la palabra era ${palabraAleatoria}`;
    cuerpo.onkeydown = "";
    botonJugar.disabled = false;
    botonRendirse.disabled= true;
}


let pantalla= document.querySelector("canvas");
let pincel= pantalla.getContext("2d")
pincel.fillStyle = "blue"
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
var botonJugar = document.querySelector("#boton-nuevoJuego");
botonJugar.addEventListener("click",function(){
    
    eliminarLineasPalabra();
    empezarJuego();
});
var botonRendirse = document.querySelector("#boton-desistir");
botonRendirse.addEventListener("click",function(){
    rendirse();
});
var avisoFinal = document.querySelector("#avisoMensaje");
var cuerpo = document.querySelector("body")
var palabraAleatoria;
var intentos;
var listaPalabras= ["hola","jorge","pedro","piña","golpe","nahuelon","agua","salto","blanco","negro","ninja","magia","yana"];

empezarJuego();