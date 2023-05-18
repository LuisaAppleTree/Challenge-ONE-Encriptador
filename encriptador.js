
function encriptarTextoInput(textoInput,separador){
    textoInput = textoInput.toLowerCase();
    let arrayInput = textoInput.split(separador);
    console.log("String input fue: " + textoInput + '"');

    for (let i = 0; i < arrayInput.length; i++){
        if (arrayInput[i] == "a") {
            let nuevoArray = arrayInput[i].replace(letraA, "ai");
            textoEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "e") {
            let nuevoArray = arrayInput[i].replace(letraE, "enter");
            textoEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "i") {
            let nuevoArray = arrayInput[i].replace(letraI, "imes");
            textoEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "o") {
            let nuevoArray = arrayInput[i].replace(letraO, "ober");
            textoEncriptado += nuevoArray
        }
        else if (arrayInput[i] == "u") {
            let nuevoArray = arrayInput[i].replace(letraU, "ufat");
            textoEncriptado += nuevoArray
        } 
        else {
            textoEncriptado += arrayInput[i]
        }
    }
}

let string1 = "El gato verde marciando vuela sobre guadalajara";
let separadorEspacio = "";
let textoEncriptado = "";
let letraA = /a/gi
let letraE = /e/gi
let letraI = /i/gi
let letraO = /o/gi
let letraU = /u/gi

encriptarTextoInput(string1,separadorEspacio);
console.log("El texto encriptado es: " + textoEncriptado);
console.log("----------------");


//Desencriptar \ ^

let ai = /ai/gi
let enter = /enter/gi
let imes = /imes/gi
let ober = /ober/gi
let ufat = /ufat/gi

let stringEncriptado = "enterl gaitober venterrdenter maircimesaindober vufatenterlai soberbrenter gufataidailaijairai";
let desencriptarTextoA = stringEncriptado.replace(ai, "a");
let desencriptarTextoE = desencriptarTextoA.replace(enter,"e");
let desencriptarTextoI = desencriptarTextoE.replace(imes, "i");
let desencriptarTextoO = desencriptarTextoI.replace(ober, "o");
let desencriptarTextoU = desencriptarTextoO.replace(ufat, "u");

console.log("El texto encriptado es: " + stringEncriptado)
console.log("El texto desencriptado es: " + desencriptarTextoU);
console.log("----------------");
