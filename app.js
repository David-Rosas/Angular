"use strict";
function enviarMision(xmen) {
    console.log("enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("regresando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
