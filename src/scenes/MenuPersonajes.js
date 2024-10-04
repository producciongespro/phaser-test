import { Scene } from "phaser";

export default class MenuPersonajes extends Scene {
    constructor() {
        super("MenuPersonajes");
    }

    init() {
        this.center = this.registry.get("center");  // Coordenadas del centro desde Boot
        this.personajes = this.registry.get("personajes");  // Lista de personajes
        this.indice = 0;  // Índice del personaje actual
    }

    create() {
        // Fondo
        this.add.image(this.center.x, this.center.y, "bgPersonajes").setOrigin(0.5);
        
        

        

        // Renderizar los personajes iniciales
        this.renderPersonajes(this.indice);

        // Flechas de navegación
        const btnFlechaIzquierdaVerde = this.add.image(this.center.x - 290, this.center.y, "btnFlechaIzquierdaVerde").setOrigin(0.5).setInteractive();
        const btnFlechaDerechaVerde = this.add.image(this.center.x + 290, this.center.y, "btnFlechaDerechaVerde").setOrigin(0.5).setInteractive();

        btnFlechaIzquierdaVerde.on("pointerdown", () => this.handleAvanzar("i"));
        btnFlechaDerechaVerde.on("pointerdown", () => this.handleAvanzar("d"));

        this.add.image(this.center.x , this.center.y, "bgPersonajes2" ).setOrigin(0.5);

        
    }

    update () {
        this.add.image(this.center.x , this.center.y, "bgPersonajes2" ).setOrigin(0.5);
    }

    renderPersonajes(i) {
        // Destruir personajes anteriores si existen
        if (this.personajeCentral) {
            this.personajeCentral.destroy();
        }
        if (this.personajeIzquierda) {
            this.personajeIzquierda.destroy();
        }
        if (this.personajeDerecha) {
            this.personajeDerecha.destroy();
        }

        // Renderizar nuevos personajes
        this.personajeIzquierda = this.add.image(this.center.x - 120, this.center.y, this.personajes[i - 1 < 0 ? this.personajes.length - 1 : i - 1].id).setScale(0.4);
        this.personajeCentral = this.add.image(this.center.x, this.center.y, this.personajes[i].id).setScale(0.9);
        this.personajeDerecha = this.add.image(this.center.x + 120, this.center.y, this.personajes[(i + 1) % this.personajes.length].id).setScale(0.4);
    }

    handleAvanzar(direccion) {
        if (direccion === "d") {
            this.indice = (this.indice + 1) % this.personajes.length;
        } else if (direccion === "i") {
            this.indice = (this.indice - 1 + this.personajes.length) % this.personajes.length;
        }

        // Animar el personaje central saliendo
        this.tweens.add({
            targets: this.personajeCentral,
            x: this.center.x + (direccion === "d" ? -120 : 120),
            scaleX: 0.4,
            scaleY: 0.4,
            duration: 500,
            onComplete: () => {
                // Cambiar el personaje central después de la animación de salida
                this.renderPersonajes(this.indice);
            }
        });

        // Mientras el central sale, animar los otros dos
        this.tweens.add({
            targets: [this.personajeIzquierda, this.personajeDerecha],
            x: (target) => target.x + (direccion === "d" ? -120 : 120),
            duration: 500,
        });
    }
}
