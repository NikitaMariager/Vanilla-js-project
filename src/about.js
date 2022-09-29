import elementCreater from "./elementCreater";
import data from "./cv-info.json";
import myAssets from "./myAssets.json";
import gsap from "gsap";

export default class about {
  constructor() {
    this.myAssets = myAssets;

    //importer data fra min json fil
    this.data = data;

    this.aboutMeSection = new elementCreater(
      "section",
      "about-section",
      "about-section",
      document.querySelector(".page-wrapper")
    );

    this.infoH2 = new elementCreater(
      "h2",
      "info-h2",
      "info-h2",
      document.querySelector(".about-section")
    );

    document.querySelector(".info-h2").innerHTML = this.myAssets.textAbout[0];

    this.aboutContainer = new elementCreater(
      "div",
      "about-con",
      "about-con",
      document.querySelector(".about-section")
    );

    //HEAD
    this.headCon = new elementCreater(
      "div",
      "headcon",
      "headcon",
      document.querySelector(".about-con")
    );

    this.topHead = new elementCreater(
      "div",
      "top-head bloc",
      "top-head",
      document.querySelector(".headcon")
    );

    this.topHeadImg = new elementCreater(
      "img",
      "top-head-img",
      "",
      document.querySelector(".top-head")
    );

    document.querySelector(".top-head-img").src = this.myAssets.imgAbout[0];

    this.brain = new elementCreater(
      "div",
      "brain bloc",
      "brain",
      document.querySelector(".headcon")
    );
    this.brainImg = new elementCreater(
      "img",
      "brain-img",
      "",
      document.querySelector(".brain")
    );

    document.querySelector(".brain-img").src = this.myAssets.imgAbout[1];

    this.splashImg = new elementCreater(
      "img",
      "splash-img",
      "",
      document.querySelector(".brain")
    );

    document.querySelector(".splash-img").src = this.myAssets.imgAbout[2];

    this.bottomHead = new elementCreater(
      "div",
      "bottom-head bloc",
      "bottom-head",
      document.querySelector(".headcon")
    );

    this.bottomHeadImg = new elementCreater(
      "img",
      "bottom-head-img",
      "bottom-head",
      document.querySelector(".bottom-head")
    );

    document.querySelector(".bottom-head-img").src = this.myAssets.imgAbout[3];

    //Cv info box

    this.cvInfoContiner = new elementCreater(
      "div",
      "cv-info-con",
      "cv-info-con",
      document.querySelector(".about-con")
    );

    this.btnContainer = new elementCreater(
      "div",
      "btn-con",
      "btn-con",
      document.querySelector(".cv-info-con")
    );

    //loop der opretter mine menuknapper
    for (let i = 0; i < this.data.cv.length; i++) {
      this.cvBtn = new elementCreater(
        "div",
        `${"btn" + i}`,
        "btn",
        document.querySelector(".btn-con")
      );

      document.querySelector(`${".btn" + i}`).textContent =
        this.data.cv[i].topic;

      document
        .querySelector(`${".btn" + i}`)
        .addEventListener("click", (event) => {
          this.currentDataIndex = i;

          document.querySelector(".cv-info-h2").textContent =
            this.data.cv[this.currentDataIndex].text;

          for (
            let counter = 0;
            counter < this.data.cv[this.currentDataIndex].name.length;
            counter++
          ) {
            this.namecon = new elementCreater(
              "div",
              `${"namecon namecon" + counter}`,
              "",
              document.querySelector(".info-con")
            );

            document.querySelector(`${".namecon" + counter}`).innerHTML = `
                
                <p>${this.data.cv[this.currentDataIndex].name[counter]}</p>

                <div class="block ${"block" + counter}">
                
             </div>

             <p>
                ${this.data.cv[this.currentDataIndex].numText[counter]}
            </p>
                `;
          }

          //Gsap for Blocks
          for (
            let gsapCounter = 0;
            gsapCounter <
            this.data.cv[this.currentDataIndex].procentages.length;
            gsapCounter++
          ) {
            gsap.to(`${".block" + gsapCounter}`, {
              duration: 2,
              scaleX: (
                this.data.cv[this.currentDataIndex].procentages[gsapCounter] /
                15
              ).toFixed(15),
              transformOrigin: "left",
              ease: "elastic.out(1, 0.3)",
            });
          }

          gsap.to(document.querySelector(".info-con"), {
            autoAlpha: 1,
            duration: 2,
            ease: "easeIn",
          });
        }); //end eventlisener
    } //end loop

    this.infoContainer = new elementCreater(
      "div",
      "info-con",
      "info-con",
      document.querySelector(".cv-info-con")
    );

    this.cvInfoH2 = new elementCreater(
      "h2",
      "cv-info-h2",
      "",
      document.querySelector(".info-con")
    );

    //gsap head

    const allBlocs = document.querySelectorAll(".bloc");

    const offsets = ["100", "105"];

    gsap.utils.toArray([".bottom-head", ".brain"]).forEach((bloc, index) => {
      gsap.to(bloc, {
        y: 0,
        ease: "linear",
        scrollTrigger: {
          trigger: ".info-h2",
          start: "top bottom-=60%",
          end: `+=${offsets[index]}`,
          /* markers: true, */
          scrub: true,
        },
      });
    });

    //gsap splash
    gsap.to(document.querySelector(".splash-img"), {
      scrollTrigger: {
        trigger: ".info-h2",
        start: "top bottom-=50%",
        end: ".top-head bottom",
        /* markers: true, */
        pin: true,
        /* scrub: true, */
      },
      delay: 1,
      autoAlpha: 1,
      scale: 2,
      duration: 10,
      ease: "easeIn",
    });

    /*  const allBlocs = document.querySelectorAll(".bloc");

    const offsets = ["290", "105"];

    gsap.utils.toArray([".bottom-head", ".brain"]).forEach((bloc, index) => {
      gsap.to(bloc, {
        y: 0,
        ease: "linear",
        scrollTrigger: {
          trigger: ".headcon",
          start: "top bottom-=50%",
          end: `+=${offsets[index]}`,
        
          scrub: true,
        },
      });
    });

    //gsap splash
    gsap.to(document.querySelector(".splash-img"), {
      scrollTrigger: {
        trigger: ".headcon",
        start: "top bottom-=50%",
        end: ".top-head bottom",
        pin: true,
        
      },
      delay: 1,
      autoAlpha: 1,
      scale: 2,
      duration: 10,
      ease: "easeIn",
    }); */
  } //end cunstructor
} //end class
