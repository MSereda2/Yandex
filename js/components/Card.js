import { elements } from '../base/base.js';
import Popup from './Popup.js';

export default class Card {

  constructor(name, url) {
    //формируем все элементы
    this.oneCard = this.createNodes("div", "place-card");

    this.imgCard = this.createNodes("div", "place-card__image");
    this.imgCard.style.backgroundImage = `url(${url})`;

    this.btnImgCard = this.createNodes("button", "place-card__delete-icon");

    this.descCard = this.createNodes("div", "place-card__description");

    this.h3Card = this.createNodes("h3", "place-card__name");
    this.h3Card.textContent = name;

    this.btnLike = this.createNodes("button", "place-card__like-icon");

    //сливаем их в один
    this.oneCard.appendChild(this.imgCard);
    this.imgCard.appendChild(this.btnImgCard);
    this.oneCard.appendChild(this.descCard);
    this.descCard.appendChild(this.h3Card);
    this.descCard.appendChild(this.btnLike);

    this.btnLike.addEventListener('click', this.likeCard);
    this.btnImgCard.addEventListener('click', this.deleteCard);
    this.imgCard.addEventListener('click', this.showCard);
  };

  get card() {
    return this.oneCard;
  };

  createNodes = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);


    return element;
  };

  showCard = (event) => {
    if (event.currentTarget === event.target) {
      elements.popupImage.src = event.target.style.backgroundImage.slice(5, -2);

      Popup.init('big-size-image');
      Popup.open();

    }
  };

  likeCard = (event) => {
    if (event.currentTarget === event.target) {
      event.target.classList.toggle("place-card__like-icon_liked");
    }
  };

  deleteCard = (event) => {
    if (event.currentTarget === event.target) {
      event.target.parentNode.parentNode.parentNode.removeChild(this.oneCard);
    }
  };

}