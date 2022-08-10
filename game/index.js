import fun from "./fun.js"

let f = new fun()
f.mover()
f.gravedad()

//cuando reinicio se me pone el scroll desde donde lo habia dejado

document.addEventListener("keydown", function(e){
    if (e.keyCode === 69){
scrollTo(0,0)        
    }

    if (e.keyCode === 87){
        f.salto()
        f.caraAbajo()
    }
})