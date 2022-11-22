/*
Ingresar a pagina1 siempre y cuando
se ingrese un correo correctamente
En caso contyrario se muestra el emsanje de error
*/

// ENTRADA
const email = document.getElementById("txtEmail");
const error = document.getElementById("emailVal");
const btnEnviar = document.getElementById("btnEnviar");
let mensaje = ""

btnEnviar.onclick = function (){
    let vemail = email.value;
    let arroba =0;
    // PROCESOS

    arroba = vemail.indexOf("@");
    if(arroba == -1){
        mensaje = "Email inválido";
    }else{
        window.location.replace("index.html");
        //window.location.assign("pagina1.html");
    }
    //SALIDA
        error.innerText = mensaje;
}

