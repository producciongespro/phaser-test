import { Game } from "phaser";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import MenuUsuario from "./scenes/MenuUsuario";

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "game-container",
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
  },
  scene: [Boot, Preloader, MenuUsuario],
};

export default new Game(config);
