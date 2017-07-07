'use strict'
class PetShop {

  constructor() {
    this.petList = [];
  }

  addPets(pets) {
    this.petList = this.petList.concat(pets);
  }

  getByType(type) {
    return this.petList.filter((value) => {
      return value instanceof type;
    });
  }

  getGreaterThanEvaragePrice() {
    let avaragePrice = this._getAvaragePrice();

    return this.petList.filter((value) => {
      return value.price > avaragePrice
    });
  }

  getFluffyAndWhite() {
    return this.petList.filter((value) => {
      return value.whiteOrFluffy();
    });
  }

  clearList() {
    this.petList = [];
  }

  _getAvaragePrice() {
    let summaryPrice = this.petList.reduce((current, next) => {
      return current + next.price;
    }, 0);

    return summaryPrice / this.petList.length;
  }
}