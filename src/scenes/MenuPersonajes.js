import { Scene } from "phaser";

export default class MenuPersonajes extends Scene {
    constructor() {
        super("MenuPersonajes");
        this.personajesSprites = []; // Array para almacenar los sprites de los personajes
    }

    init () {
        this.center = this.registry.get("center");
        this.personajes = this.registry.get("personajes");
        this.indice = 0; // Índice inicial
    }

    create () {
        this.add.image(this.center.x, this.center.y, "bgPersonajes").setOrigin(0.5);
        const btnFlechaIzquierdaVerde = this.add.image(this.center.x - 290, this.center.y, "btnFlechaIzquierdaVerde").setOrigin(0.5).setInteractive();
        const btnFlechaDerechaVerde = this.add.image(this.center.x + 290, this.center.y, "btnFlechaDerechaVerde").setOrigin(0.5).setInteractive();

        btnFlechaIzquierdaVerde.on("pointerdown", () => this.handleAvanzar("i"));
        btnFlechaDerechaVerde.on("pointerdown", () => this.handleAvanzar("d"));

        this.renderPersonajes(this.indice); // Renderiza la primera vez los personajes
    }

    update () {
        // Aquí no es necesario hacer nada ya que la actualización la manejamos en handleAvanzar
    }

    renderPersonajes(i) {
        // Limpiar los personajes anteriores
        this.personajesSprites.forEach(sprite => sprite.destroy());
        this.personajesSprites = []; // Vaciar el array de personajes

        // Obtener los índices de los personajes en el carrusel
        const prevIndex = (i - 1 + this.personajes.length) % this.personajes.length;
        const currIndex = i;
        const nextIndex = (i + 1) % this.personajes.length;

        // Renderizar los personajes con los índices calculados
        const personaje1 = this.add.image(this.center.x - 120, this.center.y, this.personajes[prevIndex].id).setScale(0.4);
        const personaje2 = this.add.image(this.center.x, this.center.y, this.personajes[currIndex].id).setScale(0.9);
        const personaje3 = this.add.image(this.center.x + 120, this.center.y, this.personajes[nextIndex].id).setScale(0.4);

        // Guardar los sprites para luego eliminarlos
        this.personajesSprites.push(personaje1, personaje2, personaje3);
    }

    handleAvanzar(direccion) {
        // Asegurar que el índice se mantenga en el rango correcto (carrusel)
        if (direccion === "d") {
            this.indice = (this.indice + 1) % this.personajes.length;
        } else if (direccion === "i") {
            this.indice = (this.indice - 1 + this.personajes.length) % this.personajes.length;
        }

        // Vuelve a renderizar los personajes con el nuevo índice
        this.renderPersonajes(this.indice);
        console.log("Índice actual: ", this.indice);
    }
}
