/*
Ingresar a pagina1 siempre y cuando
se ingrese un correo correctamente
En caso contyrario se muestra el emsanje de error
*/

// ENTRADA
const email       = document.getElementById("txtEmail"),
      nombre      = document.getElementById("txtNombre"),
      asunto      = document.getElementById("txtAsunto"),
      mensaje     = document.getElementById("txtMsj");

const errorEmail  = document.getElementById("emailVal"),
      errorNombre = document.getElementById("nombreVal"),
      errorAsunto = document.getElementById("asuntoVal"),
      errorMsj    = document.getElementById("msjVal");

const btnEnviar   = document.getElementById("btnEnviar");

let notificacion  = ""
function callError(fieldError = '', message = 'Error') {
  fieldError.innerText = message
  window.alert(message)
  return
}
function validarCampo( valor, type = ''){
  let correct = true
  switch (type) {
    case 'email':
      correct = valor.indexOf("@") > -1
      break;
    default:
      correct = valor.trim().length > 0
      break;
  }
  return correct;
}

function valorNotificacion( mensaje ){
  return `${mensaje} no válido`;
}

btnEnviar.onclick = function (){
    let vemail   = email.value,
        vnombre  = nombre.value,
        vasunto  = asunto.value,
        vmensaje = mensaje.value;
    let arroba   = 0;
    // PROCESOS
    let nombreValidado = validarCampo( vnombre );
    if(!nombreValidado) {
      callError(errorNombre, 'esta mal nombre')
      return
    } else {
      errorNombre.innerText = ''
    }
    let emailValidado = validarCampo(vemail, 'email')    
    if(!emailValidado) {
      callError(errorEmail, 'esta mal email')
      return
    } else {
      errorEmail.innerText = ''
    }
    let asuntoValidado = validarCampo( vasunto );
    if(!asuntoValidado) {
      callError(errorAsunto, 'esta mal asunto')
      return
    } else {
      errorAsunto.innerText = ''
    }
    let mensajeValidado = validarCampo( vmensaje);
    if(!mensajeValidado) {
      callError(errorMsj, 'esta mal mensaje')
      return
    } else {
      errorMsj.innerText = ''
    }
    console.log('Hello World')
    return
}