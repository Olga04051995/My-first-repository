'use strict';
class PetShopView {
  constructor(model) {
    this.petModel = model;
  }

  render(selector) {
    let container = document.querySelector(selector);

    let cats = this.petModel.getByType(Cat);
    let greaterThanAvaragePrice = this.petModel.getGreaterThanEvaragePrice();
    let fluffyAndWhite = this.petModel.getFluffyAndWhite();

    container.appendChild(this._createListNode('This is all cats', cats));
    container.appendChild(this._createListNode('All pets with price greater than avarage', greaterThanAvaragePrice));
    container.appendChild(this._createListNode('All fluffy pets and white color', fluffyAndWhite));
  }

  _createListNode(title, pets) {
    var ul = document.createElement('ul');
    var listHeader = document.createElement('h3');
    listHeader.innerHTML = title;
    ul.appendChild(listHeader);

    pets.forEach((value) => {
      var listElement = document.createElement('li');
      listElement.innerHTML = value.toString();
      ul.appendChild(listElement);
    });

    return ul;
  }
};