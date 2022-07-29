export default class direcciones {
    constructor(jugador,obstaculo1,obstaculo2){

        this.mleft = 0
        this.mtop = 0
        this.jugador = jugador
        //no importa si los valores del height o width se cambian las coliciones seran igual
        //y tambien si se cambia la posicion de los elementos
        this.velocidad = 10

        this.obstaculo1 = obstaculo1
        this.obstaculo2 = obstaculo2

    }
    moverDerecha(){
        this.mleft += this.velocidad
        this.jugador.style.marginLeft = this.mleft + "px"
        this.detectarCaraIsquierda(this.obstaculo1)
        this.detectarCaraDerecha(this.obstaculo1)
        this.detectarCaraAbajo(this.obstaculo1)
        this.detectarCaraArriba(this.obstaculo1)

        this.detectarCaraIsquierda(this.obstaculo2)
        this.detectarCaraDerecha(this.obstaculo2)
        this.detectarCaraAbajo(this.obstaculo2)
        this.detectarCaraArriba(this.obstaculo2)
    }
    
    moverIsquierda(){
        this.mleft -= this.velocidad
        this.jugador.style.marginLeft = this.mleft + "px"
        this.detectarCaraIsquierda(this.obstaculo1)
        this.detectarCaraDerecha(this.obstaculo1)
        this.detectarCaraAbajo(this.obstaculo1)
        this.detectarCaraArriba(this.obstaculo1)

        this.detectarCaraIsquierda(this.obstaculo2)
        this.detectarCaraDerecha(this.obstaculo2)
        this.detectarCaraAbajo(this.obstaculo2)
        this.detectarCaraArriba(this.obstaculo2)
    }
    
    moverAbajo(){
        this.mtop += this.velocidad
        this.jugador.style.marginTop = this.mtop + "px"
        this.detectarCaraIsquierda(this.obstaculo1)
        this.detectarCaraDerecha(this.obstaculo1)
        this.detectarCaraAbajo(this.obstaculo1)
        this.detectarCaraArriba(this.obstaculo1)

        this.detectarCaraIsquierda(this.obstaculo2)
        this.detectarCaraDerecha(this.obstaculo2)
        this.detectarCaraAbajo(this.obstaculo2)
        this.detectarCaraArriba(this.obstaculo2)
    }
    
    moverArriba(){
        this.mtop -= this.velocidad
        this.jugador.style.marginTop = this.mtop + "px"
        this.detectarCaraIsquierda(this.obstaculo1)
        this.detectarCaraDerecha(this.obstaculo1)
        this.detectarCaraAbajo(this.obstaculo1)
        this.detectarCaraArriba(this.obstaculo1)

        this.detectarCaraIsquierda(this.obstaculo2)
        this.detectarCaraDerecha(this.obstaculo2)
        this.detectarCaraAbajo(this.obstaculo2)
        this.detectarCaraArriba(this.obstaculo2)
    }

    detectarCaraIsquierda(obstaculo){

        for (let i = -9; i < obstaculo.offsetHeight/this.velocidad; i ++){
            if (this.mleft === obstaculo.offsetLeft - 90  && this.mtop === obstaculo.offsetTop + this.velocidad*i){
                this.mleft -= 10
                this.jugador.style.marginLeft = this.mleft + "px"
            }
        }

    }

    detectarCaraDerecha(obstaculo){

        for (let i = -9; i < obstaculo.offsetHeight/this.velocidad; i ++){
         if (this.mleft === obstaculo.offsetLeft + obstaculo.offsetWidth - 10 && this.mtop === obstaculo.offsetTop + this.velocidad*i){
             this.mleft += this.velocidad
             this.jugador.style.marginLeft = this.mleft + "px"
         }            
        }


    }

    detectarCaraAbajo(obstaculo){
        
        for (let i = -9; i < obstaculo.offsetWidth/this.velocidad; i ++){

          if (this.mtop === obstaculo.offsetTop + obstaculo.offsetHeight - 10 && this.mleft === obstaculo.offsetLeft + this.velocidad*i){
              this.mtop += this.velocidad
              this.jugador.style.marginTop = this.mtop + "px"
              console.log("holaaaaaaaaaaa")
          }            

        }

    }
    
    detectarCaraArriba(obstaculo){

        for (let i = -9; i < obstaculo.offsetWidth/this.velocidad; i ++){

        if (this.mtop === obstaculo.offsetTop - obstaculo.offsetHeight/3 + 10 && this.mleft === obstaculo.offsetLeft + this.velocidad*i){
            this.mtop -= this.velocidad
            this.jugador.style.marginTop = this.mtop + "px"
        }            

        }            
  
    }
}