'use strict';
class PetShopView {
  constructor(model) {
    this.petModel = model;
    this.template = '';
  }

  render(selector) {
    let container = document.querySelector(selector);

    let cats = this.petModel.getByType(Cat);
    let greaterThanAvaragePrice = this.petModel.getGreaterThanEvaragePrice();
    let fluffyAndWhite = this.petModel.getFluffyAndWhite();

    this._createListNode('This is all cats', cats);
    this._createListNode('All pets with price greater than avarage', greaterThanAvaragePrice);
    this._createListNode('All fluffy or white pets', fluffyAndWhite)

    container.innerHTML = this.template;


 //   container.appendChild(this._createListNode('This is all cats', cats));
   // container.appendChild(this._createListNode('All pets with price greater than avarage', greaterThanAvaragePrice));
    //container.appendChild(this._createListNode('All fluffy pets and white color', fluffyAndWhite));
  }
/*
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
  }*/
    _createListNode (title, pets) {
        let list = '';
        var listElement;
        pets.forEach((value) => {
        listElement = value.toString();
        list += `<li>${listElement}</li>`
        });

        this.template += `<div>
                            <ul><h3>${title}</h3>
                              ${list}
                            </ul>
                          </div>`;   
    } 
};