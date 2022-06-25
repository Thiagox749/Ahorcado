function guardarPalabra(){
    let palabraIngresada= document.querySelector("#entrada-palabra").value;
    localStorage.setItem(palabraIngresada,palabraIngresada);
}
function validarPalabra(){
    if (!pattern.test(input.value)){
        botonGuardar.disabled = true;
    }else{
        botonGuardar.disabled =false;
    }
}

var botonGuardar = document.querySelector("#boton-guardar");
botonGuardar.addEventListener("click", guardarPalabra);
botonGuardar.disabled= true;


const pattern = new RegExp('^[A-Z]+$', 'i');
var input = document.querySelector("#entrada-palabra");
input.addEventListener("input",function(){
    if (input.value.length >=2 && input.value.length <=8){
        botonGuardar.disabled = false;
        validarPalabra();
    }else{
        botonGuardar.disabled = true;
    }
})
