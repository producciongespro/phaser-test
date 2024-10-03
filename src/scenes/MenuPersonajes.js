import { Scene } from "phaser";

export default class MenuPersonajes extends Scene {
    constructor() {
        super("MenuPersonajes")
    }

    create () {
        this.add.image(100,150, "mago");
    }
}