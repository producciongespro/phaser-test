import { Scene } from "phaser";


export default class MenuPersonajes extends Scene {
    constructor() {
        super("MenuPersonajes")
    }

    init () {
        this.center = this.registry.get("center");
        this.personajes = this.registry.get("personajes");
        this.indice=0;        
        
    }

    create () {
        this.add.image(this.center.x, this.center.y, "bgPersonajes").setOrigin(0.5);
        const btnFlechaIzquierdaVerde = this.add.image(this.center.x - 290, this.center.y, "btnFlechaIzquierdaVerde").setOrigin(0.5).setInteractive();
        const btnFlechaDerechaVerde = this.add.image(this.center.x + 290, this.center.y, "btnFlechaDerechaVerde").setOrigin(0.5).setInteractive();

        btnFlechaIzquierdaVerde.on("pointerdown", ()=> this.handleAvanzar("i") );
        btnFlechaDerechaVerde.on("pointerdown", ()=> this.handleAvanzar("d") );
        
    }

    update () {
        this.renderPersonajes(this.indice);
    }

    renderPersonajes(i) {
        this.add.image(this.center.x - 120,this.center.y, this.personajes[i].id  ).setScale(0.4);
        this.add.image(this.center.x,this.center.y, this.personajes[i+1].id  ).setScale(0.9);
        this.add.image(this.center.x + 120,this.center.y, this.personajes[i+2].id  ).setScale(0.4);
    }

    handleAvanzar (direccion) {
        direccion === "d"  && this.indice++;
        direccion === "i"  && this.indice--;
        console.log(this.indice);
        

    }
}