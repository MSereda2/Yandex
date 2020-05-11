export default class Popup {

  static init(box) {
    this.box = document.querySelector(`#${box}`);
    const crossButton = this.box.querySelector(".popup__close");
    crossButton.addEventListener("click", this.close);
  }

  static open = () => {
    this.box.classList.add('popup_is-opened')
  }

  static close = () => {
    this.box.classList.remove("popup_is-opened");
  }

}