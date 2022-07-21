import caer from "./En.js";
import sonido from "./Audio.js"

export default class start {
    constructor(){
    }
    iniciar(){
let sonidoLet = new sonido()

sonidoLet.musicaVolume()

let caerLet = new caer(document.getElementById("jugador"),document.getElementById("techo"),document.getElementById("suelo"),document.getElementById("rayo"),document.getElementById("textContador"),document.getElementById("rayoEnemigo"),document.getElementById("rayoEnemigo2"))

let enemigo2 = document.getElementById("enemigo2")
let enemigo3 = document.getElementById("enemigo3")

caerLet.principio()
caerLet.rayoEnemigo(enemigo2)
caerLet.rayoEnemigo2(enemigo3)

document.getElementById("lobby").style.display = "none"
document.getElementById("game").style.display = "block"

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
    if (e.keyCode === 81){
        caerLet.rayoActivarRayo2(enemigo3)
    }
})
    }

    buttonStart(){
        document.getElementById("start").addEventListener("click", function(e){
            let startLet = new start()
            startLet.iniciar()
        })
    }
}