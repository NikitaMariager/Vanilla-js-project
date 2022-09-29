import elementCreater from "./elementCreater";
import myAssets from "./myAssets.json";
import gsap from "gsap";

export default class contact {
  constructor() {
    this.myAssets = myAssets;

    let contact = new elementCreater(
      "section",
      "contact",
      "contact",
      document.querySelector(".page-wrapper")
    );

    let contactBox = new elementCreater(
      "div",
      "contact-box",
      ".contact-box",
      document.querySelector(".contact")
    );

    let contactH2 = new elementCreater(
      "h2",
      "contact-h2",
      "contact-h2",
      document.querySelector(".contact-box")
    );

    document.querySelector(".contact-h2").textContent =
      this.myAssets.contactText[0];

    let soMe = new elementCreater(
      "div",
      "so-me",
      "so-me",
      document.querySelector(".contact-box")
    );

    for (let i = 0; i < this.myAssets.SoMe.length; i++) {
      let soMeLink = new elementCreater(
        "a",
        `${"some-icon so-me-icon" + i}`,
        "",
        document.querySelector(".so-me")
      );

      document
        .querySelector(`${".so-me-icon" + i}`)
        .setAttribute("href", `${this.myAssets.soMeLink[i]}`);

      document
        .querySelector(`${".so-me-icon" + i}`)
        .setAttribute("target", "_blank");

      document.querySelector(`${".so-me-icon" + i}`).innerHTML = `
       <img src="${this.myAssets.SoMe[i]}"> `;
    } //end loop

    let contactImg = new elementCreater(
      "img",
      "contact-img",
      "contact-img",
      document.querySelector(".contact")
    );

    document.querySelector(".contact-img").src = "./assets/images/half.png";

    gsap.to(document.querySelector(".contact-box"), {
      translateY: 15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "easeIn",
    });
  } //cunstructor
} //contact
