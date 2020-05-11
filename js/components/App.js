import {elements} from '../base/base.js';
import {initialCards} from '../data/initialCards.js';

import Card from './Card.js';
import CardList from './CardList.js';
import CardForm from './CardForm.js';
import UserForm from './UserForm.js';
import Popup from './Popup.js';

export default class App {

  constructor() {
    this.card = new Card();
    this.cardList = new CardList(elements.cards, initialCards);
    this.popup = new Popup();
    this.cardForm = new CardForm(
      {
        form: 'new',
        formEl: { name: 'name', typeOfInput: 'link' },
        formBtn: elements.button,
        formError: {errorFirstField: 'error-card-name', errorSecondField: 'error-card-link'}
    }
    );
    this.userForm = new UserForm(
      {
        form: 'profile',
        formEl: { name: 'name', typeOfInput: 'job' },
        formBtn: elements.buttonEditForm,
        formError: {errorFirstField: 'error-profile-name', errorSecondField: 'error-profile-job'}
    }
    );
    
    this.cardList.render();

  }
}
