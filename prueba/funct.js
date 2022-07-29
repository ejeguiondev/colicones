export default class funct  {
    constructor(player,contenedor,contador){
        //constructor
        this.player = player
        this.contenedor = contenedor
        //var
        this.velocidad = 10
        //disparo
        this.poderDisparar = 0
        
        //contadores
        this.contador = contador
        this.letContador = 0

    }

    //inicio

    principio(){
        this.player.style.marginLeft = this.mleft + "px"
        this.player.style.marginTop = this.mtop + "px"

        this.disparoEnemigo()
        this.randomPos()
        this.moveEn()
        this.controls()
    }

    //player acctions
    controls(){
        var change = {
            65: {
              left: "-=10"
            },
          
            87: {
              top: "-=10"
            },
          
            68: {
              left: "+=10"
            },
          
            83: {
              top: "+=10"
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
                
              $("#player").css(animation)

            }

          }
          
          function keyup(e) {
            var key = e.which
            movement[key] = clearInterval(movement[key])

              //  console.log("up", key, movement[key])
          
          }
    }

    disparo(){
        if (this.poderDisparar === 0){
            //poder disparar
        this.poderDisparar = 1
        //creamos las balas
        let crearBala = document.createElement("div")
        let posBala = 0
        //decoraciones de la bala y inplementarla al contenedor
        crearBala.className = "bala"
        crearBala.style.top = this.player.offsetTop + "px"
        crearBala.style.left = this.player.offsetLeft + 40 + "px"
        this.contenedor.appendChild(crearBala)
        //set interval para disparar
        let disparar = setInterval(() => {
            //sumarle con una variable el top
            posBala -= 10
            crearBala.style.marginTop = posBala + "px"
            //detectar a que le estamos pegando
            document.querySelectorAll('.En1, .En2, .En3').forEach((obst) => {
                //detectar si la posicion es igual con un margen de errorr
            for (let i = -9; i < obst.offsetWidth/1; i ++){
                if (crearBala.offsetTop === obst.offsetTop + obst.offsetHeight - 10 && crearBala.offsetLeft === obst.offsetLeft + 1*i){
                    //detectar a que enemigo le pegamos
                    if (obst.className === "En1"){
                    obst.style.background = "url(animationEn1.gif)" 
                    setTimeout(() => obst.style.background = "url(en1.png)",600)   
                    this.letContador += 10
                    this.contador.textContent = this.letContador
                    }
                    if (obst.className === "En2"){
                        obst.style.background = "url(animationEn2.gif)"
                        setTimeout(() => obst.style.background = "url(En2)",500)
                        this.letContador += 10
                        this.contador.textContent = this.letContador
                    }
                    if (obst.className === "En3"){
                        obst.style.background = "url(animationEn3.gif)"
                        setTimeout(() => obst.style.background = "url(En3)",500)
                        this.letContador += 10
                        this.contador.textContent = this.letContador
                    }
                    //mejorar rendimiento
                    setTimeout(() => obst.style.display = "none",600)
                    clearInterval(disparar)
                    crearBala.remove()
                }            
      
            }

            })
            //mejora de rendimiento inportante!!!!
            setTimeout(() => clearInterval(disparar),1000)
        }, 10);  
        setTimeout(() => crearBala.remove(),1000)

        }else{
            setTimeout(() => this.poderDisparar = 0,200)
        }

    }
    //Enemigos

    //disparo
    disparoEnemigo(){
        
    setInterval(() => {
        document.querySelectorAll(".En1, .En2, .En3").forEach((enemigo) => {
        if (enemigo.style.display === "none"){                
        }else{

            if (enemigo.className === "En1"){
            let crear = document.createElement("div")
            crear.className = "bala"
            crear.style.left = enemigo.offsetLeft + 40 + "px"
            crear.style.top = enemigo.offsetTop + 100 + "px"
            this.contenedor.appendChild(crear)
            let pos = enemigo.offsetTop + 100
            let disparar = setInterval(() => {

                pos += 10
                crear.style.top = pos + "px"

                if (pos === 900){

                    clearInterval(disparar)
                    crear.remove()

                }

                for (let i = -9; i < this.player.offsetWidth/1; i ++){
                    if (crear.offsetTop === this.player.offsetTop + this.player.offsetHeight - 10 && crear.offsetLeft === this.player.offsetLeft + 1*i){
                        location.reload()
                    }
                }

            }, 20);                
            }
            if (enemigo.className === "En2"){
                let crear = document.createElement("div")
                let crear1 = document.createElement("div")
                crear.className = "bala"
                crear.style.left = enemigo.offsetLeft + 60 + "px"
                crear.style.top = enemigo.offsetTop + 100 + "px"

                crear1.className = "bala"
                crear1.style.left = enemigo.offsetLeft + 20 + "px"
                crear1.style.top = enemigo.offsetTop + 100 + "px"
                this.contenedor.appendChild(crear)
                this.contenedor.appendChild(crear1)
                let pos = enemigo.offsetTop + 100
                let disparar = setInterval(() => {
    
                    pos += 10
                    crear.style.top = pos + "px"
                    crear1.style.top = pos + "px"
    
                    if (pos === 900){
    
                        clearInterval(disparar)
                        crear.remove()
                        crear1.remove()
    
                    }
    
                    for (let i = -9; i < this.player.offsetWidth/1; i ++){
                        if (crear.offsetTop === this.player.offsetTop + this.player.offsetHeight - 10 && crear.offsetLeft === this.player.offsetLeft + 1*i){
                            location.reload()
                        }
                    }

                    for (let i = -9; i < this.player.offsetWidth/1; i ++){
                        if (crear1.offsetTop === this.player.offsetTop + this.player.offsetHeight - 10 && crear1.offsetLeft === this.player.offsetLeft + 1*i){
                            location.reload()
                        }
                    }
    
                }, 10);   
            }
            if (enemigo.className === "En3"){
                let crear = document.createElement("div")
                crear.className = "bala"
                crear.style.left = enemigo.offsetLeft + 40 + "px"
                crear.style.top = enemigo.offsetTop + 100 + "px"
                this.contenedor.appendChild(crear)
                let pos = enemigo.offsetTop + 100
                let disparar = setInterval(() => {
    
                    pos += 10
                    crear.style.top = pos + "px"
                    crear.style.width = "50px"
    
                    if (pos === 900){
    
                        clearInterval(disparar)
                        crear.remove()
    
                    }
    
                    for (let i = -9; i < this.player.offsetWidth/1; i ++){
                        if (crear.offsetTop === this.player.offsetTop + this.player.offsetHeight - 10 && crear.offsetLeft === this.player.offsetLeft + 1*i){
                            location.reload()
                        }
                    }
    
                }, 20);   
            }

        }

        })            
    }, 3000);

    }
    //random pos
    randomPos(){
        setInterval(() => {

            let randomLeft = Math.floor((Math.random() * 1500) + 1)
            let randomEn = Math.floor((Math.random() * 3) + 1)
            let crear = document.createElement("crear")
            if (randomEn === 1){
                crear.className = "En1"                
            }
            if (randomEn === 2){
                crear.className = "En2"                
            }
            if (randomEn === 3){
                crear.className = "En3"                
            }
            crear.style.left = randomLeft + "px"
            this.contenedor.appendChild(crear)

        }, 5000);
    }
    //movimiento 
    moveEn(){
        let pos = 0
        setInterval(() => {

         document.querySelectorAll(".En1, .En2, .En3").forEach((En) => {

             if (pos < 20){
                pos += 20
             }else{
                pos -= 20
             }
             En.style.marginLeft = pos + "px"

         })     

        }, 500);


    }
}