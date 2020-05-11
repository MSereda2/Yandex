import Card from './Card.js';

export default class CardList {

    constructor(container, initialCards) {
        this.container = container;
        this.initialCards = initialCards;
    }

     addNewCard = (name, link) => {
      const newCard = new Card(name, link);
      this.container.appendChild(newCard.card);
    }

    render() {
      this.initialCards.forEach(item => {
        const newCard = new Card(item.name, item.link);
        this.container.appendChild(newCard.card)
      })
    }
}