import { Scene } from "phaser";
import fondos from "../config/fondos.json";
import botones from "../config/botones.json";


export default class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.center = this.registry.get("center");
    this.personajes = this.registry.get("personajes");
    this.estilosTexto = this.registry.get("estilosTexto");
    
  }

  preload() {
    fondos.forEach((item) =>
      this.load.image(item.id, `assets/fondos/${item.archivo}.${item.ext}`)
    );

    botones.forEach((item) =>
        this.load.image(item.id, `assets/botones/${item.archivo}.${item.ext}`)
      );

    this.personajes.forEach((item) =>
      this.load.image(item.id, `assets/personajes/${item.archivo}.${item.ext}`)
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
        this.estilosTexto.blanco
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
