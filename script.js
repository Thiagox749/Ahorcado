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

var botonJugar = document.querySelector("#boton-nuevoJuego");
var botonDesistir = document.querySelector("#boton-desistir");
var palabraAleatoria;
var intentos = 6;
botonJugar.onclick = empezarJuego;
botonDesistir.disabled = true; 
botonDesistir.onclick= terminarJuego;


var listaPalabras= ["hola","jorge","pedro","piña","golpe","nahuelon","agua","salto","blanco","negro","ninja","magia","yana"];
let cuerpo = document.querySelector("body")

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
    intentos= 6;
}
function colocarLetra(event){
    let acierto = false;
    for(i = 0; i < palabraAleatoria.length; i++){
        var letraOculta = document.querySelector("#letra"+i);
        var letraComparar = letraOculta.textContent;
        if (event.key.toUpperCase() == letraComparar){
            letraOculta.style.visibility= 'visible';
            acierto= true;
        }
    }
    if (!acierto){
        console.log(intentos);
        intentos-=1;
        if (intentos==0){
            alert(`Perdiste puerco desgraciado, la palabra oculta era ${palabraAleatoria}`);
            terminarJuego();
            return;
        }
    }
    comprobarVictoria();
}
function empezarJuego(){
    palabraAleatoria= listaPalabras[Math.floor(Math.random()*(listaPalabras.length-1))];
    botonJugar.disabled = true;
    botonDesistir.disabled = false;
    cuerpo.onkeydown = colocarLetra;
    dibujarLineasPalabra(palabraAleatoria);
}
function terminarJuego(){
    botonJugar.disabled = false;
    eliminarLineasPalabra();
}
function comprobarVictoria(){
    for(i=0; i<palabraAleatoria.length;i++){
        let visible = document.querySelector("#letra"+i);
        if (visible.style.visibility == "hidden"){
            return;
        }
    }
    alert(`Ganaste, la palabra era ${palabraAleatoria}`);
}