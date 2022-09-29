import * as PIXI from "pixi.js";
export default class stage {
  constructor() {
    this.targetWidth = 400;
    this.targetHeight = 500;
    this.targetCenter = 400;

    //width and heigt of my canvas
    this.appWidth = 300;
    this.appHeight = 300;

    this.scaleFactor = this.appWidth / this.targetWidth;

    //opretter mit canvas
    this.app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio,
      backgroundAlpha: 0,
      width: this.appWidth,
      height: this.appHeight,
    });
    //tilføjer den til min div character-container
    document.querySelector(".character-container").appendChild(this.app.view);

    /*  */

    this.scene = new PIXI.Container();
    this.scene.x = this.appWidth / 2;
    this.scene.y = 0;
    this.scene.pivot.x = this.targetCenter * 0.5;
    //this.actors.pivot.y = this.targetCenter * 0.5;

    this.app.stage.addChild(this.scene);
    this.scene.getBounds();
    //this.actors.scale.x = this.actors.scale.y = this.scaleFactor;
    //this.actors.scale.y = this.actors.scale.x = this.scaleFactor;
    this.scene.scale.x = this.scene.scale.y = this.scaleFactor;
    this.scene.scale.y = this.scene.scale.x =
      this.appHeight / this.targetHeight;
    this.app.renderer.resize(this.appWidth, this.appHeight);

    this.app.view.style.width = this.appWidth + "px";

    this.app.view.style.height = this.appHeight + "px";
  } //constructor
} //class
