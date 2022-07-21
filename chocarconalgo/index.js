import direcciones from "./mover.js"

let functionDirecction = new direcciones(document.getElementById("jugador"),document.getElementById("obstaculo"),document.getElementById("obstaculo2"))

document.addEventListener("keydown", function(e){
    if (e.keyCode === 68){
       functionDirecction.moverDerecha()
    }
    if (e.keyCode === 65){
        functionDirecction.moverIsquierda()
    }
    if (e.keyCode === 83){
        functionDirecction.moverAbajo()
    }
    if (e.keyCode === 87){
        functionDirecction.moverArriba()
    }

})