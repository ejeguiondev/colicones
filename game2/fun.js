import coin from "./coin.js"
let c = new coin()

export default class fun {
    constructor(){
        this.velocidad = 10
        this.direccion = 0

        this.cantidadCora = 3
    }
    //move
    mover(){
        var change = {
            65: {
              left: "-=" + this.velocidad
            },
          
            68: {
              left: "+=" + this.velocidad
            },
          }

          $(document).on({
            keydown: keydown,
            keyup: keyup
          })
          
          var movement = []
          
          
          function keydown(e) {
            let x2 = $("#jugador").offset()
            let posTop2 = x2.top

            var key = e.which
            var animation = change[key];
            if (!movement[key]) { // watch out for repeating keys!
              
              movement[key] = setInterval(keepGoing, 15)
              let x = $("#jugador").offset()
              let posLeft = x.top
              console.log(posLeft) 
              
            }
            if (e.keyCode === 87){
              funLet.salto()
            }
            document.querySelectorAll('.obst').forEach((obst) => {
            if (e.keyCode === 68 && posTop2 === obst.offsetTop - 100){
              $("#jugador").css('background','url(run.gif)')
              this.direccion = 0
            }              
            })

            document.querySelectorAll('.obst').forEach((obst) => {
            if (e.keyCode === 65 && posTop2 === obst.offsetTop - 100){
              $("#jugador").css('background','url(runR.gif)')
              this.direccion = 1
            }
            })


            if (e.keyCode === 69){
              funLet.espadaAtac()
            }
            //  console.log("down", key, movement[key])
            function keepGoing() {

              $("#jugador").css(animation)
              funLet.llamarColicion()
              funLet.llamarColicionC()
              funLet.llamarColicionEn()
              funLet.llamarEsenario()
              c.llamarColicion()

            }

          }
          
          function keyup(e) {
            var key = e.which
            movement[key] = clearInterval(movement[key])
            var x = $("#jugador").offset()

            let jugador = document.getElementById("jugador")
            document.querySelectorAll(".obst").forEach((obst) => {

            if (x.top === obst.offsetTop - 100){
              if (jugador.style.background.includes("atack.gif")){
              }else{
                if (this.direccion === 1){
              $("#jugador").css('background','url(idleR.gif)')                       
                }else{
                  $("#jugador").css('background','url(idle.gif)') 
                }
            
              }
            }else{           
            }              
            })


              //  console.log("up", key, movement[key])
          
          }
          
    }

    salto(){
        let x2 = $("#jugador").offset()
        let posTop2 = x2.top
        document.querySelectorAll(".obst").forEach((obst) => {
        if (posTop2 === obst.offsetTop - 100){
        var x = $("#jugador").offset()
        var posTop = x.top
        let posFinal = posTop
        let terminarInterval = 0
        
        let salto = setInterval(() => {

            terminarInterval += 1
            posFinal -= 10
            funLet.moverEsenario()
            funLet.moverEsenario2()
            $("#jugador").css('top',''+ posFinal +'px')
            $("#jugador").css("background","url(__Jump.gif)")

            var x = $("#jugador").offset()
            var posLeft = x.left
            var posTop = x.top
            
            document.querySelectorAll(".obst").forEach((obst) => {
               
            for (let i = -9; i < obst.offsetWidth/10; i ++){
              if (posTop === obst.offsetTop + obst.offsetHeight - 10 && posLeft === obst.offsetLeft + 10*i){
                clearInterval(salto)
                $("#jugador").css("background","url(__Fall.gif)")
              }
            }     
        
            })
            funLet.caraArribaC()
            funLet.caraAbajoC()
            if (terminarInterval === 40){
                clearInterval(salto)
                $("#jugador").css("background","url(__Fall.gif)")
            }
        }, 10);    


        }
        })
    }
    //colicion con objetos

    llamarColicion(){
      funLet.caraIsquierda()
      funLet.caraDerecha()
      funLet.caraAbajo() 
      funLet.caraArriba()
    }

    caraIsquierda(){

        var x = $("#jugador").offset()
        var posLeft = x.left
        var posTop = x.top
        document.querySelectorAll(".obst").forEach((obst) => {

        for (let i = -9; i < obst.offsetHeight/10; i ++){
         if (posLeft === obst.offsetLeft - 90 && posTop === obst.offsetTop + 10*i){
             $("#jugador").css('left','' + posLeft - 10 +'px')
         }          
        }

        })



    }

    caraDerecha(){

      var x = $("#jugador").offset()
      var posLeft = x.left
      var posTop = x.top
      document.querySelectorAll(".obst").forEach((obst) => {

      for (let i = -9; i < obst.offsetHeight/10; i ++){
       if (posLeft === obst.offsetLeft + obst.offsetWidth - 10 && posTop === obst.offsetTop + 10*i){
        var posFinal = posLeft + 10
           $("#jugador").css('left','' + posFinal +'px')
       }          
      } 

      })



   }

    caraAbajo(){
    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".obst").forEach((obst) => {
      //collote time
    for (let i = -9; i < obst.offsetWidth/10 + 2; i ++){
      if (posTop === obst.offsetTop - 90 && posLeft === obst.offsetLeft + 10*i){
        $("#jugador").css('top',''+ posTop - 10 +'px')
      }
    }     

    })

   }

   caraArriba(){
    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".obst").forEach((obst) => {
      
    for (let i = -9; i < obst.offsetWidth/10; i ++){
      if (posTop === obst.offsetTop + obst.offsetHeight - 10 && posLeft === obst.offsetLeft + 10*i){
        var posFinal = posTop + 10
        $("#jugador").css('top',''+ posFinal +'px')
      }
    }

    })


    
   }
   //colicion con enemigo o algo que te haga daño
   llamarColicionEn(){
    funLet.caraIsquierdaEn()
    funLet.caraDerechaEn()
    funLet.caraAbajoEn() 

   }
   caraIsquierdaEn(){

    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".en").forEach((obst) => {

    for (let i = -9; i < obst.offsetHeight/10; i ++){
     if (posLeft === obst.offsetLeft - 90 && posTop === obst.offsetTop + 10*i){
      this.cantidadCora -= 1
      let cora2 = document.getElementById("life2")
      let cora3 = document.getElementById("life3")
      if (this.cantidadCora === 2){
        funLet.salto()
        var posGolpe = posLeft - 70
        $("#jugador").css('left',''+ posGolpe +'px')
        cora3.style.display = "none"
      }else if (this.cantidadCora === 1){
        cora2.style.display = "none"
        var posGolpe = posLeft - 70
        $("#jugador").css('left',''+ posGolpe +'px')
        funLet.salto()
      }else if (this.cantidadCora === 0){
        location.reload()
      }

     }          
    }
    })



  }

   caraDerechaEn(){

  var x = $("#jugador").offset()
  var posLeft = x.left
  var posTop = x.top
  document.querySelectorAll(".en").forEach((obst) => {

  for (let i = -9; i < obst.offsetHeight/10; i ++){
   if (posLeft === obst.offsetLeft + obst.offsetWidth - 10 && posTop === obst.offsetTop + 10*i){
    this.cantidadCora -= 1
    let cora2 = document.getElementById("life2")
    let cora3 = document.getElementById("life3")
    if (this.cantidadCora === 2){
      cora3.style.display = "none"
      var posGolpe = posLeft + 70
      $("#jugador").css('left',''+ posGolpe +'px')
      funLet.salto()
    }else if (this.cantidadCora === 1){
      cora2.style.display = "none"
      var posGolpe = posLeft + 70
      $("#jugador").css('left',''+ posGolpe +'px')
      funLet.salto()
    }else if (this.cantidadCora === 0){
      location.reload()
    }
   }          
  } 

  })



  }

   caraAbajoEn(){
var x = $("#jugador").offset()
var posLeft = x.left
var posTop = x.top
document.querySelectorAll(".en").forEach((obst) => {
   
for (let i = -9; i < obst.offsetWidth/10; i ++){
  if (posTop === obst.offsetTop - 90 && posLeft === obst.offsetLeft + 10*i){
    this.cantidadCora -= 1
    let cora2 = document.getElementById("life2")
    let cora3 = document.getElementById("life3")
    if (this.cantidadCora === 2){
      cora3.style.display = "none"
      var posGolpe = posTop - 160
      $("#jugador").css('top',''+ posGolpe +'px')
      funLet.salto()
    }else if (this.cantidadCora === 1){
      cora2.style.display = "none"
      var posGolpe = posTop - 140
      $("#jugador").css('top',''+ posGolpe +'px')
      funLet.salto()
    }else if (this.cantidadCora === 0){
      location.reload()
    }
  }
}     

})

  }

   //gravedad
   gravedad(){
    setInterval(() => {
      document.querySelectorAll('#jugador').forEach((element) => {
        let posTop = element.offsetTop
        posTop += 10
        element.style.top = posTop + "px"
        funLet.caraAbajo() 
        funLet.caraArriba()  
        funLet.caraAbajoEn()   

        funLet.caraArribaC()
        funLet.caraAbajoC()

      })

    }, 30);
   }
   //moveCam and not enter principio
   llamarEsenario(){
    funLet.moverEsenario()
    funLet.moverEsenario2()
    funLet.chocarPrincipio()
   }
   moverEsenario(){

    let x = $("#jugador").offset()
    let posLeft = x.left

    
    let x2 = $("#moveDocument").offset()
    let posLeft2 = x2.left

    if (posLeft === posLeft2){

      scrollBy(10,0)

    }

   }

   moverEsenario2(){

    let x = $("#jugador").offset()
    let posLeft = x.left

    
    let x2 = $("#moveDocument2").offset()
    let posLeft2 = x2.left

    if (posLeft === posLeft2){

      scrollBy(-10,0)

    }

   }

   chocarPrincipio(){

    let x = $("#jugador").offset()
    let posLeft = x.left

    
    let x2 = $("#principioDocument").offset()
    let posLeft2 = x2.left

    if (posLeft === posLeft2){

        var posFinal = posLeft2 + 10
        $("#jugador").css('left',''+ posFinal +'px')

    }

   }

   /*atack*/

   espadaAtac(){
    let jugador = document.getElementById("jugador")
    if (jugador.style.background.includes('runR.gif') || jugador.style.background.includes('idleR.gif')){
      $("#jugador").css('background','url(atackR.gif)')
    }else{
    $("#jugador").css('background','url(atack.gif)')      
    }

    $("#atacSpada").css('display','block')
    let x = $("#jugador").offset()
    if (jugador.style.background.includes('atack.gif')){
    let posTop = x.top
    let posLeft = x.left + 70   
    $("#atacSpada").css('top',''+ posTop +'px')
    $("#atacSpada").css('left',''+ posLeft +'px')
    setTimeout(() => $("#atacSpada").css('display','none'),100)   
    }else{
      let posTop = x.top
      let posLeft = x.left - 70   
      $("#atacSpada").css('top',''+ posTop +'px')
      $("#atacSpada").css('left',''+ posLeft +'px')
      setTimeout(() => $("#atacSpada").css('display','none'),100) 
    }


    if (jugador.style.background.includes("atackR.gif")){
      setTimeout(() => $("#jugador").css('background','url(idleR.gif)'),500)
    }else{
      setTimeout(() => $("#jugador").css('background','url(idle.gif)'),500)
    }

    document.querySelectorAll('.en').forEach((en) => {
      let atacSpada = document.getElementById("atacSpada")
     for (let i = -9; i < en.offsetWidth/10; i ++){

      if (atacSpada.offsetLeft === en.offsetLeft + 10*i && atacSpada.offsetTop === en.offsetTop){
        setTimeout(() => en.remove(),100)
      }

    }   
    
    })

   }
   /*move en*/
   //mejorar
   moveEn(){
    document.querySelectorAll('.en').forEach((en) => {
      let p = 0
      let pos = en.offsetLeft
      let move = setInterval(() => {
        if (p === 0){
        pos += 10
        en.style.left = pos + "px"  
        en.style.background = "url(slime.png)"        
        }
        if (p === 1){
          pos -= 10
          en.style.left = pos + "px"       
          en.style.background = "url(slimeR.png)"       
        }

        document.querySelectorAll('.obst').forEach((obst) => {

          for (let i = -9; i < obst.offsetHeight/10; i ++){

            if (en.offsetLeft === obst.offsetLeft - 100 && en.offsetTop === obst.offsetTop + 10*i){
              p = 1
            }

          }

        })
        document.querySelectorAll('.obst').forEach((obst) => {
          for (let j = -9; j < obst.offsetHeight/10; j ++){

            if (en.offsetLeft === obst.offsetLeft + obst.offsetWidth - 10 && en.offsetTop === obst.offsetTop + 10*j){
              p = 0
            }

          }
        })
        funLet.caraIsquierdaEn()
        funLet.caraDerechaEn()

      }, 50);

    })      
  }

  /*subirCora*/

  subirCora(){

    this.cantidadCora = 3
    $("#life2").css('display','block')
    $("#life3").css('display','block')

  }
  llamarColicionC(){
    funLet.caraIsquierdaC()
    funLet.caraDerechaC()
    funLet.caraAbajoC() 
    funLet.caraArribaC()
  }
  caraIsquierdaC(){

    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".heartAgarrable").forEach((obst) => {

    for (let i = -9; i < obst.offsetHeight/10; i ++){
     if (posLeft === obst.offsetLeft - 90 && posTop === obst.offsetTop + 10*i){
        funLet.subirCora()
        obst.remove()
     }          
    }

    })



}

caraDerechaC(){

  var x = $("#jugador").offset()
  var posLeft = x.left
  var posTop = x.top
  document.querySelectorAll(".heartAgarrable").forEach((obst) => {

  for (let i = -9; i < obst.offsetHeight/10; i ++){
   if (posLeft === obst.offsetLeft + obst.offsetWidth - 10 && posTop === obst.offsetTop + 10*i){
    funLet.subirCora()
    obst.remove()
   }          
  } 

  })



}

caraAbajoC(){
var x = $("#jugador").offset()
var posLeft = x.left
var posTop = x.top
document.querySelectorAll(".heartAgarrable").forEach((obst) => {
   
for (let i = -9; i < obst.offsetWidth/10; i ++){
  if (posTop === obst.offsetTop - 90 && posLeft === obst.offsetLeft + 10*i){
    funLet.subirCora()
    obst.remove()
  }
}     

})

}

caraArribaC(){
var x = $("#jugador").offset()
var posLeft = x.left
var posTop = x.top
document.querySelectorAll(".heartAgarrable").forEach((obst) => {
  
for (let i = -9; i < obst.offsetWidth/10; i ++){
  if (posTop === obst.offsetTop + obst.offsetHeight - 10 && posLeft === obst.offsetLeft + 10*i){
    funLet.subirCora()
    obst.remove()
  }
}

})




}

}

let funLet = new fun()

//estuve viendo y no encuentro una libreria o ejemplo que haga con divs y no canvas

//0
//explicacion de como hice y pense las coliciones 
//1
//1.5
//mostrar el document.querySelectorAll('.obst').forEach((obst) => {})
//enseñar lo que hice con los intervals para disparar
//2
//mostrar el movimiento del enemigo
//3
//las coliciones con los enemigos las monedas y todo
//4 
//explicar el collote time
//5
//movimiento de camara
//6
//como funciona la espada
//7
//mostrar que cuando te toca un enemigo saltas
