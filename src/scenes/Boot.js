import { Scene } from "phaser";

export default class Boot extends Scene {
    constructor() {
        super ("Boot")        
    }

    preload () {
        this.load.image ("splash", "./assets/hoja.jpg");
    }

    create () {
        this.scene.start("Preloader")
    }


}