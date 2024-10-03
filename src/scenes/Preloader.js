import { Scene } from "phaser";

export default class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.width = this.scale.width;
    this.height = this.scale.height;
    
  }

  preload() {
    this.load.image("macha", "assets/macha.png");
    this.load.image("verdurera", "assets/verdurera.png");
    this.load.image("mago", "assets/mago.png");
    this.load.image("lechero", "assets/lechero.png");
  }

  create() {

    const splash =  this.add.image(this.width / 2, this.height / 2, "splash").setOrigin(0.5);
    this.add.text(this.width / 2, splash.y + splash.height / 2 + 20, "Cargando datos. Por favor espere", {
        fontSize: "20px",
        color: "#ffffff",
        fontFamily: "Arial",
        align: "center"
      })
      .setOrigin(0.5); 

    setTimeout(() => {
      //this.scene.start("GamePueblo");
      this.scene.transition({
        target: "MenuUsuario",
        duration: 100,
        moveBelow: true,
        onUpdate: (progress) => {
          this.cameras.main.setAlpha(1 - progress);
        },
      });
    }, 2000);
  }
}
