import { Scene } from "phaser";
import personajes from "../config/personajes.json"

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
        
    }

    preload () {
        this.load.image ("splash", "./assets/splash.png");
    }

    create () {
        this.scene.start("Preloader")
    }


}