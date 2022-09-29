import gsap from "gsap";
import character from "./character";
import elementCreater from "./elementCreater";
import myAssets from "./myAssets.json";
import { Howl, Howler } from "howler";

export default class welcomeSection {
  constructor() {
    this.myAssets = myAssets;

    this.welcomeContainer = new elementCreater(
      "div",
      "welcomecontainer",
      "welcomecontainer",
      document.querySelector(".wrapper")
    );

    this.overlay = new elementCreater(
      "div",
      "overlay",
      "overlay",
      document.querySelector(".welcomecontainer")
    );

    //div container til canvas
    this.characterContainer = new elementCreater(
      "div",
      "character-container",
      "character-container",
      document.querySelector(".welcomecontainer")
    );

    this.textContainer = new elementCreater(
      "h1",
      "textarea",
      "textarea",
      document.querySelector(".welcomecontainer")
    );

    document.querySelector(".textarea").textContent =
      this.myAssets.textWelcome[0];

    window.addEventListener("load", () => {
      document.body.style.overflow = "hidden";
      let welcomeSound = new Howl({
        src: [this.myAssets.Sound[0]],
      });

      welcomeSound.play();

      //makes 'welcome appear'
      gsap.to(".textarea", {
        autoAlpha: 1,
        duration: 3,
        ease: "easeIn",
        onComplete: () => {
          //makes 'welcome disappear
          gsap.to(".textarea", {
            autoAlpha: 0,
            duration: 3,
            ease: "easeOut",
            onComplete: () => {
              //changes text of h1 to 'come closer'
              document.querySelector(".textarea").textContent =
                this.myAssets.textWelcome[1];
              //makes h1 appear
              gsap.to(".textarea", {
                autoAlpha: 1,
                duration: 3,
                ease: "easeIn",

                onComplete: () => {
                  document.body.style.overflow = "visible";
                  //makes it posibel to remove overlay on scroll
                  gsap.to(".overlay", {
                    x: "0%",
                    y: "0%",
                    autoAlpha: 0,
                    scrollTrigger: {
                      trigger: ".character-container",
                      start: 0,
                      end: "400 top",
                      /* markers: true, */
                      scrub: true,
                    },
                    onComplete: () => {
                      gsap.to(".overlay", {
                        autoAlpha: 1,
                        duration: 2,
                      });
                    },
                    //makes h1 disappear on scroll
                    onStart: () => {
                      gsap.to(".textarea", {
                        autoAlpha: 0,
                        duration: 2,
                        onComplete: () => {
                          //changes text of h1 to 'hello'
                          document.querySelector(".textarea").textContent =
                            this.myAssets.textWelcome[2];
                          gsap.to(".textarea", {
                            autoAlpha: 1,
                            duration: 2,
                            onComplete: () => {
                              gsap.to(".textarea", {
                                autoAlpha: 0,
                                duration: 2,

                                onComplete: () => {
                                  document.querySelector(
                                    ".textarea"
                                  ).textContent = this.myAssets.textWelcome[3];

                                  gsap.to(".textarea", {
                                    autoAlpha: 1,
                                    duration: 2,
                                    onComplete: () => {
                                      gsap.to(".textarea", {
                                        autoAlpha: 0,
                                        duration: 2,
                                      });
                                    },
                                  });
                                },
                              });
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    });

    //tilføjer min character
    this.myCharacter = new character();
  }
}
