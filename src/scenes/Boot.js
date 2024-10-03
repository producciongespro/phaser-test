import { Scene } from "phaser";

export default class Boot extends Scene {
    constructor() {
        super ("Boot")        
    }

    preload () {
        this.load.image ("splash", "./assets/splash.png");
    }

    create () {
        this.scene.start("Preloader")
    }


}