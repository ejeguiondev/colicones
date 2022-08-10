export default class fun {
    constructor(){
        this.velocidad = 10
    }
    //move
    mover(){
        var change = {
          87: {
            top: "-=" + this.velocidad
          },
            65: {
              left: "-=" + this.velocidad
            },
          
            68: {
              left: "+=" + this.velocidad
            },
          
            83: {
              top: "+=" + this.velocidad
            },
          }

          $(document).on({
            keydown: keydown,
            keyup: keyup
          })
          
          var movement = []
          
          
          function keydown(e) {
            var key = e.which
            var animation = change[key];
            if (!movement[key]) { // watch out for repeating keys!
              
              movement[key] = setInterval(keepGoing, 15)
              let x = $("#jugador").offset()
              let posLeft = x.top
              console.log(posLeft) 
              
            }
            //  console.log("down", key, movement[key])
            function keepGoing() {
                
              $("#jugador").css(animation)
              funLet.caraIsquierda()
              funLet.caraDerecha()
              funLet.caraAbajo() 
              funLet.caraArriba()
              funLet.moverEsenario()
              funLet.chocarPrincipio()

            }

          }
          
          function keyup(e) {
            var key = e.which
            movement[key] = clearInterval(movement[key])

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
            $("#jugador").css('top',''+ posFinal +'px')

            var x = $("#jugador").offset()
            var posLeft = x.left
            var posTop = x.top
            funLet.bloqueSuerte()
            document.querySelectorAll(".obst").forEach((obst) => {
               
            for (let i = -9; i < obst.offsetWidth/10; i ++){
              if (posTop === obst.offsetTop + obst.offsetHeight - 10 && posLeft === obst.offsetLeft + 10*i){
                clearInterval(salto)
              }
            }     
        
            })

            if (terminarInterval === 40){
                clearInterval(salto)
            }
        }, 10);    

        }
        })      


    }
    //colicion
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
       
    for (let i = -9; i < obst.offsetWidth/10; i ++){
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

   //gravedad
   gravedad(){
    setInterval(() => {
        let x = $("#jugador").offset()
        let posTop = x.top
        posTop += 10
        $("#jugador").css('top',''+ posTop +'px')
        funLet.caraIsquierda()
        funLet.caraDerecha()
        funLet.caraAbajo() 
        funLet.caraArriba()
    }, 30);
   }
   //moveCam and not enter principio
   moverEsenario(){

    let x = $("#jugador").offset()
    let posLeft = x.left

    
    let x2 = $("#finalDocument").offset()
    let posLeft2 = x2.left

    if (posLeft === posLeft2){

      scrollBy(10,0)

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

   /*blocks funct*/
   bloqueSuerte(){

    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top

    document.querySelectorAll(".blockS").forEach((block) => {

      for (let i = -9; i < block.offsetWidth/10; i ++){
        if (posTop === block.offsetTop + block.offsetHeight - 10 && posLeft === block.offsetLeft + 10*i){

          setTimeout(() => block.style.background = "grey",1)
          if (block.className.includes("TH")){
            let crearHongo = document.createElement("div")
            crearHongo.className = "hongo"
            crearHongo.style.top = block.offsetTop - 50 + "px"
            crearHongo.style.left = block.offsetLeft + 25 + "px"
            $("#contenedor").append(crearHongo)

          }else{
            
          }

        }
      }

    })

   }

}

let funLet = new fun()