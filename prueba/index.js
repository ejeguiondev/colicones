import funct from "./funct.js";

let funLet = new funct(document.getElementById("player"),document.getElementById("contenedor"),document.getElementById("textContador"))

funLet.principio()

document.addEventListener("keydown", function(e){
    if (e.keyCode === 69){
        funLet.disparo()
    }
})