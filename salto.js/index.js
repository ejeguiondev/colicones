import salto from "./salto.js";

let saltoLet = new salto(document.getElementById("jugador"),document.getElementById("obstaculo"),document.getElementById("obstaculo2"))

saltoLet.posicionPrincipal()

document.addEventListener("keypress", function(e){
    if (e.code === "KeyD"){
        saltoLet.moverDerecha()
    }
    if (e.code === "KeyA"){
        saltoLet.moverIsquierda()
    }
    if (e.code === "Space"){
        saltoLet.saltar()
    }

})

//ver la cara isquierda
//ver la cara de arriba