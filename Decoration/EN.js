import sonido from "./Audio.js"

let sonidoLet = new sonido()

export default class caer {
    
    constructor(jugador,techo,suelo,rayo,textContador,rayoEn,rayoEn2){
       this.jugador = jugador
       this.techo = techo
       this.suelo = suelo
       this.rayo = rayo
       this.textContador = textContador
       this.rayoEn = rayoEn
       this.rayoEn2 = rayoEn2

       this.mtop = 300
       this.mleft = 0

       this.contadorLet = 0

       this.rayoDetector = 0
    }

    principio(){
       this.jugador.style.marginTop = this.mtop + "px"
       this.jugador.style.marginLeft = this.mleft + "px"
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

       if (this.rayoDetector === 1){
           setTimeout(() => this.jugador.style.background = "url(nave.png)",1500)
           setTimeout(() => this.rayoDetector = 0,1500)
       }else{
        sonidoLet.disparoAudio()
       this.rayoDetector = 1
       this.jugador.style.background = "url(naveSinEnergia.png)"
       this.rayo.style.display = "block"
       this.rayo.style.marginTop = this.mtop + 45 + "px"

       console.log("rayo: " + this.rayo.offsetTop)
       console.log("obst: " + obst.offsetTop)

       for (let i = 0; i < obst.offsetHeight/1; i ++){
        if (this.rayo.offsetTop === obst.offsetTop + 1*i){

           this.contadorLet += 1
           this.textContador.textContent = this.contadorLet

           let randomPos = Math.floor((Math.random() * 750) + 1)
           console.log(randomPos)
           if (randomPos < 100){
            randomPos = 100
           }
           obst.style.top = randomPos + "px"

        }       

       }

       setTimeout(() => this.rayo.style.display = "none",100)            
       }
       
   }

   rayoActivarRayo2(obst2){
    if (this.rayoDetector === 1){
        setTimeout(() => this.jugador.style.background = "url(nave.png)",1500)
        setTimeout(() => this.rayoDetector = 0,1500)
    }else{
        sonidoLet.disparoAudio()
    this.rayoDetector = 1
    this.jugador.style.background = "url(naveSinEnergia.png)"
    this.rayo.style.display = "block"
    this.rayo.style.marginTop = this.mtop + 45 + "px"

    console.log("rayo: " + this.rayo.offsetTop)
    console.log("obst2: " + obst2.offsetTop)

    for (let i = 0; i < obst2.offsetHeight/1; i ++){
     if (this.rayo.offsetTop === obst2.offsetTop + 1*i){

        this.contadorLet += 2
        this.textContador.textContent = this.contadorLet

        let randomPos = Math.floor((Math.random() * 750) + 1)
        console.log(randomPos)
        if (randomPos < 100){
            randomPos = 100
        }
        obst2.style.top = randomPos + "px"

     }       

    }

    setTimeout(() => this.rayo.style.display = "none",100)            
    }
    
}

   rayoEnemigo(obst){

    setInterval(() => {
        sonidoLet.disparoAudio()
        this.rayoEn.style.display = "block"
        this.rayoEn.style.top = obst.offsetTop + 45 + "px"

        for (let i = 0; i < this.jugador.offsetHeight/1; i ++){
            if (this.rayoEn.offsetTop === this.jugador.offsetTop + 1*i){
                location.reload()
        }
        }
    }, 3000);

    setInterval(() => {
        this.rayoEn.style.display = "none"
    }, 3200);

   }

   rayoEnemigo2(obst2){
    setInterval(() => {
        sonidoLet.disparoAudio()
        this.rayoEn2.style.display = "block"
        this.rayoEn2.style.top = obst2.offsetTop + 15 + "px"

        for (let i = 0; i < this.jugador.offsetHeight/1; i ++){
            if (this.rayoEn2.offsetTop === this.jugador.offsetTop + 1*i){
                location.reload()
        }
        }
    }, 6000);

    setInterval(() => {
        this.rayoEn2.style.display = "none"
    }, 6200);

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