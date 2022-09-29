import * as PIXI from "pixi.js";
import stage from "./stage";

export default class character {
  constructor() {
    this.myStage = new stage();
    this.scene = this.myStage.scene;

    //array med karakteren png og jason format
    let assets = ["../assets/spritesheet/nikita.json"];

    //opretter en loader der sørger for at alle filer er loadet
    const loader = PIXI.Loader.shared
      .add(assets)

      .load((loader, res) => {
        let sheet =
          PIXI.Loader.shared.resources["../assets/spritesheet/nikita.json"]
            .spritesheet;

        this.character = new PIXI.AnimatedSprite(sheet.animations["body"]);
        this.character.anchor.set(0.5);

        this.character.x = 150;
        this.character.y = 250;
        this.character.interactive = true;
        this.character.zIndex = 1;
        this.character.animationSpeed = 0.15;
        this.character.play();
        this.scene.addChild(this.character);
      }); //end loader
  } //cunstructor
} //class
