export default class coin {
    constructor(){
        this.textoCoin = document.getElementById("textoMonedas")
        this.coins = 0
    }

    llamarColicion(){
      this.caraAbajo()
      this.caraDerecha()
      this.caraArriba()
      this.caraIsquierda()
    }

    caraIsquierda(){

        var x = $("#jugador").offset()
        var posLeft = x.left
        var posTop = x.top
        document.querySelectorAll(".coin").forEach((obst) => {

        for (let i = -9; i < obst.offsetHeight/10; i ++){
         if (posLeft === obst.offsetLeft - 90 && posTop === obst.offsetTop + 10*i){
            this.coins += 1
            this.textoCoin.textContent = this.coins
            obst.style.display = "none"
         }          
        }

        })



    }

    caraDerecha(){

      var x = $("#jugador").offset()
      var posLeft = x.left
      var posTop = x.top
      document.querySelectorAll(".coin").forEach((obst) => {

      for (let i = -9; i < obst.offsetHeight/10; i ++){
       if (posLeft === obst.offsetLeft + obst.offsetWidth - 10 && posTop === obst.offsetTop + 10*i){
        this.coins += 1
        this.textoCoin.textContent = this.coins
        obst.style.display = "none"
       }          
      } 

      })



   }

    caraAbajo(){
    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".coin").forEach((obst) => {
       
    for (let i = -9; i < obst.offsetWidth/10; i ++){
      if (posTop === obst.offsetTop - 90 && posLeft === obst.offsetLeft + 10*i){
        this.coins += 1
        this.textoCoin.textContent = this.coins
        obst.style.display = "none"
      }
    }     

    })

   }

   caraArriba(){
    var x = $("#jugador").offset()
    var posLeft = x.left
    var posTop = x.top
    document.querySelectorAll(".coin").forEach((obst) => {
      
    for (let i = -9; i < obst.offsetWidth/10; i ++){
      if (posTop === obst.offsetTop + obst.offsetHeight - 10 && posLeft === obst.offsetLeft + 10*i){
        this.coins += 1
        this.textoCoin.textContent = this.coins
        obst.style.display = "none"
      }
    }

    })
    


    
   }

}