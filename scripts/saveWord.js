function guardarPalabra(){
    let palabraIngresada= document.querySelector("#entrada-palabra");
    localStorage.setItem(palabraIngresada.value,palabraIngresada.value);
    palabraIngresada.value = "";
    alert("La palabra ingresada ha sido guardada con exito!");
}
function validarEntrada(entrada){
    return (!pattern.test(entrada));
}

var botonGuardar = document.querySelector("#boton-guardar");
botonGuardar.addEventListener("click", guardarPalabra);
botonGuardar.disabled= true;


const pattern = new RegExp('^[A-Z]+$', 'i');
var input = document.querySelector("#entrada-palabra");
input.addEventListener("input",function(){
    if (input.value.length >=2 && input.value.length <=8){
        botonGuardar.disabled = false;
        if(validarEntrada(input.value)){
            botonGuardar.disabled = true;
        }else{
            botonGuardar.disabled = false;
        }
    }else{
        botonGuardar.disabled = true;
    }
})
