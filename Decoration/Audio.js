export default class sonido {
    constructor(){
        this.music = document.getElementById("music")
    }
    musicaVolume(){
        music.volume = 0.45
    }
    disparoAudio(){
        let disparo = new Audio()
        disparo.src = "disparo.wav"
        disparo.volume = 0.3
        disparo.play()
    }
}