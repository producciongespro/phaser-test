import { Scene } from "phaser";


export default class MenuUsuario extends Scene {
    constructor() {
        super("MenuUsuario")      
    }

    init () {
        console.log("Inicio de escena");        
    }


    create () {        
        this.add.image(100, 250, "macha").setScale(0.3, 0.3);
        this.add.image(350, 250, "mago").setScale(0.6, 0.6);
    }




}