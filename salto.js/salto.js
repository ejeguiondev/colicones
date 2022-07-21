export default class salto {
    constructor(jugador,obstaculo,obstaculo2){

        this.mleft = 50
        this.mtop = 0
        this.velocidad = 10
        this.jugador = jugador
        this.obstaculo = obstaculo
        this.obstaculo2 = obstaculo2

    }
    posicionPrincipal(){
        this.jugador.style.marginLeft = this.mleft + "px"
        this.jugador.style.marginTop = this.mtop + "px"

        setInterval(() => {
            this.mtop += 10
            this.jugador.style.marginTop = this.mtop + "px"
            this.detectarCaraAbajo()
            this.detectarCaraAbajoObt2()
        }, 50);
    }

    moverDerecha(){
        this.mleft += this.velocidad
        this.jugador.style.marginLeft = this.mleft + "px"
        this.detectarCaraAbajo()

        this.detectarCaraDchaObt2()
        this.detectarCaraIsquierdaObt2()
        this.detectarCaraAbajoObt2()

    }
    
    moverIsquierda(){
        this.mleft -= this.velocidad
        this.jugador.style.marginLeft = this.mleft + "px"
        this.detectarCaraAbajo()

        this.detectarCaraDchaObt2()
        this.detectarCaraIsquierdaObt2()
        this.detectarCaraAbajoObt2()

    }

    saltar(){

            this.mtop -= 50
            this.jugador.style.marginTop = this.mtop + "px"

    }

    detectarCaraAbajo(){

        for (let i = -9;i < this.obstaculo.offsetWidth/this.velocidad;i ++){

        if (this.mtop === this.obstaculo.offsetTop - 90 && this.mleft === this.obstaculo.offsetLeft + this.velocidad*i){
            this.mtop -= this.velocidad
            this.jugador.style.marginTop = this.mtop + "px"
        }

        }

    }

    detectarCaraDchaObt2(){

        for (let i = -9; i < this.obstaculo2.offsetHeight/this.velocidad; i ++){
            if (this.mleft === this.obstaculo2.offsetLeft + this.obstaculo2.offsetWidth - 10 && this.mtop === this.obstaculo2.offsetTop + this.velocidad*i){
                this.mleft += this.velocidad
                this.jugador.style.marginLeft = this.mleft + "px"
            }            
        }

    }

    detectarCaraIsquierdaObt2(){

        for (let i = -9; i < this.obstaculo2.offsetHeight/this.velocidad; i ++){
            if (this.mleft === this.obstaculo2.offsetLeft - 90 && this.mtop === this.obstaculo2.offsetTop +this.velocidad*i){
                this.mleft -= 10
                this.jugador.style.marginLeft = this.mleft + "px"
            }
        }

    }

    detectarCaraAbajoObt2(){

        for (let i = -9;i < this.obstaculo2.offsetWidth/this.velocidad;i ++){

        if (this.mtop === this.obstaculo2.offsetTop - 90 && this.mleft === this.obstaculo2.offsetLeft + this.velocidad*i){
            this.mtop -= this.velocidad
            this.jugador.style.marginTop = this.mtop + "px"
        }

        }

    }

    //hacer que el this.obstaculo2.offsetWidth sea divido por la velocidad es para que no hayan tantas conprobaciones ya que lo podria poner asi this.obstaculo2.offsetWidth/1
    //pero  no es nesesario ya que nuestro jugador se mueve de 10 en 10 y entras en la posicion 11 por ejemplo seria inposible
}