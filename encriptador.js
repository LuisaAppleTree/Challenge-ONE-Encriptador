
function encriptarTextoInput(textoInput,separador){
    let arrayInput = textoInput.split(separador);
    console.log("String input fue: " + textoInput + '"');
    console.log('El separador es: "' + separador + '"');

    for (let i = 0; i < arrayInput.length; i++){
        if (arrayInput[i] == "a") {
            let nuevoArray = arrayInput[i].replace(letraA, "ai");
            console.log(nuevoArray);
        }
        else if (arrayInput[i] == "e") {
            let nuevoArray = arrayInput[i].replace(letraE, "enter");
            console.log(nuevoArray);
        }
        else if (arrayInput[i] == "i") {
            let nuevoArray = arrayInput[i].replace(letraI, "imes");
            console.log(nuevoArray);
        }
        else if (arrayInput[i] == "o") {
            let nuevoArray = arrayInput[i].replace(letraO, "ober");
            console.log(nuevoArray);
        }
        else if (arrayInput[i] == "u") {
            let nuevoArray = arrayInput[i].replace(letraU, "ufat");
            console.log(nuevoArray);
        } 
        else {
            console.log(arrayInput[i]);
        }
    }
}

let string1 = "A a e azul o a e verde i i hola o u";
let string2 = "El gato verde marciando vuela sobre guadalajara"
let separadorEspacio = " ";
let letraA = /a*/gi
let letraE = /e*/gi
let letraI = /i*/gi
let letraO = /o*/gi
let letraU = /u*/gi

encriptarTextoInput(string1,separadorEspacio);
