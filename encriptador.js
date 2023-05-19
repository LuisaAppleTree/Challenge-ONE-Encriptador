//solución personal.
const textArea = document.querySelector(".texto_input");
const mensaje = document.querySelector(".texto_output");
const copiar = document.querySelector(".copiar");

//Encriptar
function encriptarTexto(stringEncriptado,separador){
    stringEncriptado = stringEncriptado.toLowerCase();
    let arrayInput = stringEncriptado.split(separador);
    console.log("String input fue: " + stringEncriptado + '"');

    for (let i = 0; i < arrayInput.length; i++){
        if (arrayInput[i] == "a") {
            let nuevoArray = arrayInput[i].replaceAll("a", "ai");
            stringEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "e") {
            let nuevoArray = arrayInput[i].replaceAll(letraE, "enter");
            stringEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "i") {
            let nuevoArray = arrayInput[i].replaceAll(letraI, "imes");
            stringEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "o") {
            let nuevoArray = arrayInput[i].replaceAll(letraO, "ober");
            stringEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "u") {
            let nuevoArray = arrayInput[i].replaceAll(letraU, "ufat");
            stringEncriptado += nuevoArray
        } 
        else {
            stringEncriptado += arrayInput[i]
        }
    }
    return stringEncriptado.replaceAll(textArea.value, "");
}

function encriptarBoton(){
    let textoEncriptado = encriptarTexto(textArea.value,separador);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

let separador = "";
let letraA = /a/gi
let letraE = /e/gi
let letraI = /i/gi
let letraO = /o/gi
let letraU = /u/gi
console.log("----------------");


//Desencriptar \ ^
//fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!

let ai = /ai/gi
let enter = /enter/gi
let imes = /imes/gi
let ober = /ober/gi
let ufat = /ufat/gi

let stringEncriptado = "enterl gaitober venterrdenter maircimesainober vufatenterlai soberbrenter gufataidailaijairai";
let textoDesencriptado = "";

function desencriptarTexto(stringEncriptado){
    for(i=0;i<=stringEncriptado.length;i++){
        let textoDesencriptadoA = stringEncriptado.replace(ai,"a")
        for(i=0;i<=stringEncriptado.length;i++){
            let textoDesencriptadoE = textoDesencriptadoA.replace(enter, "e")
            for(i=0;i<=stringEncriptado.length;i++){
                let textoDesencriptadoI = textoDesencriptadoE.replace(imes,"i")
                for(i=0;i<=stringEncriptado.length;i++) {
                    textoDesencriptadoO = textoDesencriptadoI.replace(ober, "o")
                    for(i=0;i<=stringEncriptado.length;i++) {
                        textoDesencriptadoU = textoDesencriptadoO.replace(ufat,"u")
                        textoDesencriptado = textoDesencriptadoU
                    }
                    return textoDesencriptadoU
                }
            }
        }  
    }
}

function desencriptarBoton(){
    let textoDesencriptado = desencriptarTexto(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

//copiar
copiar.addEventListener("click", e => {
    mensaje.select();
    document.execCommand("copy");
})
