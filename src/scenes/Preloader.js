import { Scene } from "phaser";
import assets from "../config/assets.json";
import txt from "../config/txtStyles.json";

export default class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.center = this.registry.get("center");
    this.personajes = this.registry.get("personajes");
    console.log("this.personajes", this.personajes);
    
  }

  preload() {
    assets.forEach((item) =>
      this.load.image(item.id, `assets/${item.id}.${item.ext}`)
    );
    this.personajes.forEach((item) =>
      this.load.image(item.id, `assets/${item.id}.${item.ext}`)
    );
  }

  create() {
    const splash = this.add
      .image(this.center.x, this.center.y, "splash")
      .setOrigin(0.5);
    this.add
      .text(
        this.center.x,
        splash.y + this.center.y + 20,
        "Cargando datos. Por favor espere",
        txt.blanco
      )
      .setOrigin(0.5);

    setTimeout(() => {
      //this.scene.start("GamePueblo");
      this.scene.transition({
        target: "MenuVersus",
        duration: 1000,
        moveBelow: true,
        onUpdate: (progress) => {
          this.cameras.main.setAlpha(1 - progress);
        },
      });
    }, 500);
  }
}
