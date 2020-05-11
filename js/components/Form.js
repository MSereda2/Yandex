import { elements } from '../base/base.js';
import Popup from './Popup.js';
import {validateLength,validateURL} from '../helpers/validation.js';
import App from '../script.js';

export default class Form {
  constructor({form,formEl,formBtn,formError}) {
    this.form = document.forms[form];
    this.firstField = this.form.elements[formEl.name];
    this.secondField = this.form.elements[formEl.typeOfInput];
    this.buttonSubmit = this.form.querySelector(".popup__button");
    this.errorFirstField = this.form.querySelector(`#${formError.errorFirstField}`);
    this.errorSecondField = this.form.querySelector(`#${formError.errorSecondField}`);

    this.btn = formBtn;
    this.btn.addEventListener("click", this.showForm);

    this.form.addEventListener("submit", this.submitForm);

    this.firstField.addEventListener("input", this.formValidation);
    this.secondField.addEventListener("input", this.formValidation);

    this.formName = form;
  }

  showForm = () => {
    if (this.formName === 'profile') {
      this.firstField.value = elements.userInfoName.textContent;
      this.secondField.value = elements.userInfoJob.textContent;
      Popup.init('profile');
      Popup.open();
    } else {
      Popup.init('add-card');
      Popup.open();
    }

  };

  closeForm = () => {
    Popup.close();
  };

  formValidation = () => {
    if (this.formName === 'new') {
      this.errorSecondField.textContent = validateURL(this.secondField.value);
      this.errorFirstField.textContent = validateLength(this.firstField.value, 2, 30);
    } else {
      this.errorFirstField.textContent = validateLength(this.firstField.value, 2, 30);
      this.errorSecondField.textContent = validateLength(this.firstField.value, 2, 30);

    }

    if (this.errorFirstField.textContent || this.errorSecondField.textContent) {
      this.buttonSubmit.classList.remove("popup__button_enable");
    } else {
      this.buttonSubmit.classList.add("popup__button_enable");
    }
  };

  submitForm = (e) => {
    e.preventDefault();

    if (!this.buttonSubmit.classList.contains("popup__button_enable")) {
      return;
    }
    if (this.formName === 'new') {
      App.cardList.addNewCard(this.firstField.value, this.secondField.value);
    } else {
      elements.userInfoName.textContent = this.firstField.value;
      elements.userInfoJob.textContent = this.secondField.value;
      Popup.close();
    }
    Popup.close()

    this.reset();
  };

  reset() {
    this.form.reset();
  };
}