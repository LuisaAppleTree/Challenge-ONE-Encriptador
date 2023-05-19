//solución ONE
const textArea = document.querySelector(".texto_input");
const mensaje = document.querySelector(".texto_output");

function encriptarBoton(){
    let textoEncriptado = encriptarTexto(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptarTexto(texto){
    let arregloEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < arregloEncriptacion.length; i++){
        if(texto.includes(arregloEncriptacion[i][0])){
            texto = texto.replaceAll(arregloEncriptacion[i][0],arregloEncriptacion[i][1])
        }
    }
    return texto
}

function desencriptarBoton(){
    let textoDesencriptado = desencriptarTexto(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptarTexto(textoEncriptado){
    let arregloDesencriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < arregloDesencriptacion.length; i++){
        if(textoEncriptado.includes(arregloDesencriptacion[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(arregloDesencriptacion[i][1],arregloDesencriptacion[i][0])
        }
    }
    return textoEncriptado
}

