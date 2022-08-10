import fun from "./fun.js"

let f = new fun()
f.mover()
f.gravedad()
f.moveEn()

//cuando reinicio se me pone el scroll desde donde lo habia dejado

document.addEventListener("keydown", function(e){
    if (e.keyCode === 9){
        scrollTo(0,0)        
    }

})
