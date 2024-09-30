import { Scene } from "phaser"
export default class Main extends Scene {
    constructor() {
        super ("Main")        
    }

    create () {
        this.cameras.main.setBounds(0, 0, 1024, 768);        
        this.add.image(0,0, "fondo1" ).setOrigin(0).setScrollFactor(1);
        
        this.add.image(100,250,  "macha"  ).setScale(0.3,0.3);
        this.add.image( 200, 250,"verdurera").setScale(0.8, 0.8);
        this.add.image(350,250 , "mago").setScale(0.6,0.6);
        this.player1 =  this.add.image(500,250, "lechero").setScale(0.7,0.7);

        this.cursors = this.input.keyboard.createCursorKeys();       
        //this.player1 = this.physics.add.image(10, 10, "lechero");

        this.cameras.main.startFollow(this.player1, true);
        // this.cameras.main.startFollow(this.player1, true, 0.09, 0.09);

        this.cameras.main.setZoom(0.5);
    }

    update () {
        this.updateDirect();
    }


    updateDirect ()
    {
        if (this.cursors.left.isDown)
        {
            this.player1.setAngle(-90);
            this.player1.x -= this.directSpeed;
        }
        else if (this.cursors.right.isDown)
        {
            this.player1.setAngle(90);
            this.player1.x += this.directSpeed;
        }

        if (this.cursors.up.isDown)
        {
            this.player1.setAngle(0);
            this.player1.y -= this.directSpeed;
        }
        else if (this.cursors.down.isDown)
        {
            this.player1.setAngle(-180);
            this.player1.y += this.directSpeed;
        }
    }
} 