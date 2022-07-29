export default class fun {
    constructor(){

      this.velocidad = 10

    }
    mover(){
        var change = {
            65: {
              left: "-=" + this.velocidad
            },
          
            87: {
              top: "-=" + this.velocidad
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
              
            }
            //  console.log("down", key, movement[key])
            function keepGoing() {
                
              $("#jugador").css(animation)
              funLet.caraIsquierda()
              funLet.caraDerecha()
              funLet.caraAbajo() 
              funLet.caraArriba()

            }

          }
          
          function keyup(e) {
            var key = e.which
            movement[key] = clearInterval(movement[key])

              //  console.log("up", key, movement[key])
          
          }
          
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

}

let funLet = new fun()

//por que esta el movement[]
