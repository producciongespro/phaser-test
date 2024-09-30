import { Scene } from "phaser";


export default class Preloader extends Scene {
    constructor() {
        super("Preloader")
    }
    
    init () {
        const {width, height } = this.scale;
        this.add.image( width / 2, height / 2, "splash" ).setOrigin(0.5);
    }


    preload () {
        this.load.image("fondo1", "assets/fondo_1.jpg" );
        //this.load.image("fondo2", "assets/fondo_2.png" );
        this.load.image( "macha", "assets/macha.png"  );
        this.load.image( "verdurera", "assets/verdurera.png"  );
        this.load.image( "mago", "assets/mago.png"  );
        this.load.image( "lechero", "assets/lechero.png"  );


    }


    create () {
        setTimeout(() => {
            
            this.scene.transition({
                target: 'Main',
                duration: 500,
                moveBelow: true,
                onUpdate: (progress) => {
                    this.cameras.main.setAlpha(1 - progress);
                }
            });

        }, 2000);
        
    }
}