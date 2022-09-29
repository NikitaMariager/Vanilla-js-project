export default class elementCreater {
  constructor(myElement, myClass, myId, myPlacement) {
    this.newElement = document.createElement(myElement);
    this.newElement.className = myClass;
    this.newElement.id = myId;
    myPlacement.appendChild(this.newElement);
  }
}
