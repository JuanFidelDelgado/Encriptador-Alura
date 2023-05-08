const textArea = document.querySelector(".entradaTexto");
const salidaTexto = document.querySelector(".salidaTexto");
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function limpiar() {
    document.getElementById("salida").style.backgroundImage = "none";
}

function encriptar(mensaje) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensaje = mensaje.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensaje.includes(matrizCodigo[i][0])) {
            mensaje = mensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return mensaje;
}

function desencriptar(mensaje) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensaje = mensaje.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensaje.includes(matrizCodigo[i][1])) {
            mensaje = mensaje.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return mensaje;
}

function btnEncriptar(params) {
    const mensajeEncriptado = encriptar(textArea.value);
    salidaTexto.value = mensajeEncriptado;
    textArea.value = "";
    //salidaTexto.style.backgroundImage = "none";
    limpiar();
}

function btnDesencriptar(params) {
    const mensaje = desencriptar(textArea.value);
    salidaTexto.value = mensaje;
    textArea.value = "";
}

function btnCopiar() {
    var copyText = document.getElementById("salida");

    // Selecciona el campo donde está el texto a copiar
    copyText.select();
    // Copia el texto que hay en el campo
    navigator.clipboard.writeText(copyText.value);

    // Muestra un alert si se realizó la copia
    //alert("Se ha copiado un texto encriptado" + copyText.value);
}

