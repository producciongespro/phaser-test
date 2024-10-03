import { Scene } from "phaser";


export default class MenuVersus extends Scene {
    constructor() {
        super("MenuVersus")      
    }

    init () {
        console.log("Inicio de escena");        
    }


    create () {        
        this.menu1 = this.add.image(this.scale.width / 2, this.scale.height / 2 , "menu1")
        .setOrigin(0.5)
        .setInteractive();

        this.menu1.on("pointerdown", ()=> this.cambiarEscena () )

    }

    cambiarEscena () {
        console.log("Cambiando escena");
        
        this.scene.transition({
            target: "MenuPersonajes",
            duration: 200,
            moveBelow: true,
            onUpdate: (progress) => {
              this.cameras.main.setAlpha(1 - progress);
            },
          });
        }




}