export default class caer {
    
     constructor(jugador,techo,suelo,rayo,textContador){
        this.jugador = jugador
        this.techo = techo
        this.suelo = suelo
        this.rayo = rayo
        this.textContador = textContador

        this.mtop = 300
        this.mleft = 100

        this.contadorLet = 0
     }

     principio(){
        this.jugador.style.marginTop = this.mtop + "px"
        this.jugador.style.marginLeft = this.mleft + "px"
     }

     gravedad(){

        setInterval(() => {
            this.mtop += 10
            this.jugador.style.marginTop = this.mtop + "px"
            this.detectarCaraArriba(this.suelo)
        }, 70);

     }

    propulsar(){
        this.mtop -= 10
        this.jugador.style.marginTop = this.mtop + "px"

        this.detectarCaraAbajo(techo)
    }

    despropulsar(){
        this.mtop += 10
        this.jugador.style.marginTop = this.mtop + "px"
        this.detectarCaraArriba(this.suelo)
    }

    rayoActivarRayo(obst){
        
        if (this.jugador.style.background === "grey"){
            setTimeout(() => this.jugador.style.background = "green",1500)
        }else{
        this.jugador.style.background = "grey"
        this.rayo.style.display = "block"
        this.rayo.style.marginTop = this.mtop + "px"

        console.log("rayo: " + this.rayo.offsetTop)
        console.log("obst: " + obst.offsetTop)

        for (let i = 0; i < obst.offsetHeight/10; i ++){
         if (this.rayo.offsetTop === obst.offsetTop + 10*i){

            this.contadorLet += 1
            this.textContador.textContent = this.contadorLet
            let randomPos = Math.floor((Math.random() * 5) + 1)
            if (randomPos === 1){
                obst.style.top = "200px"
            }
            if (randomPos === 2){
                obst.style.top = "400px"
            }
            if (randomPos === 3){
                obst.style.top = "600px"
            }
            if (randomPos === 4){
                obst.style.top = "700px"
            }
            if (randomPos === 5){
                obst.style.top = "500px"
            }

         }       

        }

        setTimeout(() => this.rayo.style.display = "none",100)            
        }
        
    }


    detectarCaraAbajo(obstaculo){
        
        for (let i = -9; i < obstaculo.offsetWidth/10; i ++){

          if (this.mtop === obstaculo.offsetTop + obstaculo.offsetHeight - 10 && this.mleft === obstaculo.offsetLeft + 10*i){
            location.reload()
          }            

        }

    }

    detectarCaraArriba(obstaculo){

        for (let i = -9;i < obstaculo.offsetWidth/10;i ++){

        if (this.mtop === obstaculo.offsetTop - 90 && this.mleft === obstaculo.offsetLeft + 10*i){
            location.reload()
        }

        }

    }

}