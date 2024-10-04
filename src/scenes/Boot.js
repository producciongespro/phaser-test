import { Scene } from "phaser";
import personajes from "../config/personajes.json";
import estilosTexto from "../config/estilosTexto.json"

export default class Boot extends Scene {
    constructor() {
        super ("Boot")        
    }

    init () {      
                
        this.registry.set("center", {
            x: this.scale.width / 2,
            y: this.scale.height / 2
        });        
        this.registry.set("personajes", personajes);    
        this.registry.set("estilosTexto", estilosTexto);        
    }

    preload () {
        this.load.image ("splash", "./assets/splash.png");
    }

    create () {
        this.scene.start("Preloader")
    }


}