import elementCreater from "./elementCreater";
import gsap from "gsap";
import { Howl, Howler } from "howler";
import myAssets from "./myAssets.json";

export default class Private {
  constructor() {
    this.myAssets = myAssets;

    this.section = new elementCreater(
      "section",
      "private",
      "private",
      document.querySelector(".page-wrapper")
    );

    //overlay

    let privateOverlay = new elementCreater(
      "div",
      "private-overlay",
      "private-overlay",
      document.querySelector(".private")
    );

    let overlayh2 = new elementCreater(
      "h2",
      "private-h2",
      "private h2",
      document.querySelector(".private-overlay")
    );

    document.querySelector(".private-h2").textContent =
      this.myAssets.textPrivate[0];

    //video
    let myVideo = new elementCreater(
      "div",
      "my-video",
      "my-video",
      document.querySelector(".private")
    );

    this.video = new elementCreater(
      "video",
      "video",
      "video",
      document.querySelector(".my-video")
    );

    let videoSource = new elementCreater(
      "source",
      "video-src",
      "",
      document.querySelector(".video")
    );

    document.querySelector(".video-src").src = this.myAssets.videoPrivate[0];

    var vid = document.getElementById("video");

    function playVid() {
      vid.play();
    }

    //tegnet verden
    let privateBg = new elementCreater(
      "div",
      "private-bg",
      "private-bg",
      document.querySelector(".private")
    );

    let privateElements = new elementCreater(
      "div",
      "private-elements",
      "private-elements",
      document.querySelector(".private-bg")
    );

    //dør
    let door = new elementCreater(
      "div",
      "door",
      "door",
      document.querySelector(".private-elements")
    );

    //Karakter

    let character = new elementCreater(
      "div",
      "private-character",
      "private-character",
      document.querySelector(".private-bg")
    );

    let characterImg = new elementCreater(
      "img",
      "character-img",
      "character-img",
      document.querySelector(".private-character")
    );

    document.querySelector(".character-img").src = this.myAssets.imgPrivate[0];

    this.speechBobble = new elementCreater(
      "p",
      "speechbubble",
      "speechbubble",
      document.querySelector(".private-elements")
    );

    let speechBobbleText = document.querySelector(".speechbubble");
    speechBobbleText.textContent = this.myAssets.textPrivate[1];

    //indsætter lyd ved klik
    document.querySelector(".door").addEventListener("click", () => {
      document.querySelector(".speechbubble").textContent =
        this.myAssets.textPrivate[3];

      let knock = new Howl({
        src: [this.myAssets.Sound[1]],
        onend: () => {
          let bark = new Howl({
            src: [this.myAssets.Sound[2]],
            onend: () => {
              document.querySelector(".speechbubble").textContent =
                this.myAssets.textPrivate[4];
            },
          });
          bark.play();
        },
      });

      knock.play();
    });

    //når der klikkes på characteren forsvinder tegning og den afspiller video.
    document
      .querySelector(".private-character")
      .addEventListener("click", () => {
        gsap.to(document.querySelector(".private-bg"), {
          autoAlpha: 0,
          duration: 5,
          ease: "easeOut",

          onComplete: () => {
            playVid();

            document.querySelector(".speechbubble").textContent =
              this.myAssets.textPrivate[2];

            gsap.to(document.querySelector(".private-bg"), {
              delay: 3,
              autoAlpha: 1,
              duration: 5,
              ease: "easeIn",
            });
          },
        });
      });

    //gsap to make overlay disapear
    gsap.to(document.querySelector(".private-overlay"), {
      scrollTrigger: {
        trigger: ".private",
        start: "top bottom-=90%",
        end: " bottom",
        /* markers: true, */
        pin: true,
      },
      autoAlpha: 0,
      duration: 5,
      ease: "easeOut",
      onStart: () => {
        let outsideSound = new Howl({
          src: [this.myAssets.Sound[3]],
        });
        outsideSound.play();
      },
      onComplete: () => {
        gsap.to(document.querySelector(".speechbubble"), {
          translateX: 0,
          duration: 3,
          ease: "easeIn",
          onComplete: () => {
            gsap.to(document.querySelector(".speechbubble"), {
              translateY: 10,
              repeat: -1,
              yoyo: true,
              duration: 2,
              ease: "easeIn",
            });
          },
        });
      },
    });
  } //cunstructor
} //class
