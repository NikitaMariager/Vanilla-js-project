import elementCreater from "./elementCreater";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import welcomeSection from "./welcome-section";
import about from "./about";
import Private from "./Private";
import contact from "./contact";

gsap.registerPlugin(ScrollTrigger);

export default class Initialize {
  constructor() {
    this.wrapper = new elementCreater(
      "div",
      "wrapper",
      "wrapper",
      document.body
    );

    // tilføjer min første section
    this.myWelcome = new welcomeSection();

    this.pageWrapper = new elementCreater(
      "div",
      "page-wrapper",
      "page-wrapper",
      document.body
    );

    //tilføjer min anden section
    this.myAbout = new about();

    //tilføjer private section
    this.privateSection = new Private();

    //tilføjer min kontakt section
    this.contact = new contact();
  } // END constructor
} // END class
