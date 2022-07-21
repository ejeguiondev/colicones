import caer from "./juntar.js";

let caerLet = new caer(document.getElementById("jugador"),document.getElementById("techo"),document.getElementById("suelo"),document.getElementById("rayo"),document.getElementById("textContador"))

caerLet.gravedad()
caerLet.principio()

let enemigo2 = document.getElementById("enemigo2")

document.addEventListener("keydown", function(e){
    if (e.keyCode === 87){
        caerLet.propulsar()
    }
    if (e.keyCode === 83){
        caerLet.despropulsar()
    }
    if (e.keyCode === 69){
        caerLet.rayoActivarRayo(enemigo2)
    }
})