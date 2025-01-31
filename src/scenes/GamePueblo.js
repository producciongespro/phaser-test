import { Scene } from "phaser";
export default class GamePueblo extends Scene {
  constructor() {
    super("GamePueblo");
    this.currentPlayer1 = true;
	this.directSpeed= 4.5;
	this.zoom= 0.5;
	
  }

  create() {
    
    this.cameras.main.setBounds(0, 0, 5000, 2813);

    this.add.image(0, 0, "fondo1").setOrigin(0);
    this.add.image(100, 250, "macha").setScale(0.3, 0.3);
    this.add.image(350, 250, "mago").setScale(0.6, 0.6);

    // Cambia a physics.add.image para que la cámara siga al player1
    this.player1 = this.physics.add.image(4830, 356, "lechero").setScale(0.6);
    this.player2 = this.physics.add.image(4830, 580, "verdurera").setScale(0.6);

    this.add.image(0, 0, "fondo2").setOrigin(0);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.key = this.input.keyboard.addKey("C");
    

    this.cameras.main.startFollow(this.player1, true); // Inicia siguiendo a player1
    this.cameras.main.setZoom(this.zoom);
  }

  update() {
    // Mover al jugador enfocado
    if (this.currentPlayer1) {
      this.movePlayer1();
    } else {
      this.movePlayer2();
    }

    // Actualizar el jugador enfocado al presionar 'C'
    this.updateChangePlayer();
  }

  updateChangePlayer() {
    if (Phaser.Input.Keyboard.JustDown(this.key)) { // Asegúrate de usar 'JustDown' para detectar la tecla solo una vez
      this.currentPlayer1 = !this.currentPlayer1;

      if (this.currentPlayer1) {
        this.cameras.main.startFollow(this.player1, true, 0.1, 0.1 ); // Seguir a player1
      } else {
        this.cameras.main.startFollow(this.player2, true, 0.1, 0.1); // Seguir a player2
      }

      if (this.currentPlayer1) {
        console.log("Pos Jugdor 2");
        console.log( this.player2.x, this.player2.y  );              
      } else {
        console.log("Pos jugador 1");
        console.log( this.player1.x, this.player1.y  );
      }
    }
  }

  movePlayer1() {
    if (this.cursors.left.isDown) {
      this.player1.x -= this.directSpeed;
    } else if (this.cursors.right.isDown) {
      this.player1.x += this.directSpeed;
    }

    if (this.cursors.up.isDown) {
      this.player1.y -= this.directSpeed;
    } else if (this.cursors.down.isDown) {
      this.player1.y += this.directSpeed;
    }
  }

  movePlayer2() {
    if (this.cursors.left.isDown) {
      this.player2.x -= this.directSpeed;
    } else if (this.cursors.right.isDown) {
      this.player2.x += this.directSpeed;
    }

    if (this.cursors.up.isDown) {
      this.player2.y -= this.directSpeed;
    } else if (this.cursors.down.isDown) {
      this.player2.y += this.directSpeed;
    }
  }
}
