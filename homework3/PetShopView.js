'use strict';
class PetShopView {
	constructor (selector) {
		this.div = document.querySelector(selector);		
	}	
	
	createList () {

		let allCats = document.createElement('ul');
		allCats.setAttribute('class','allCats');
		this.div.appendChild(allCats);

		let petsAvaragePrice = document.createElement('ul');
		petsAvaragePrice.setAttribute('class','petsAvaragePrice');
		this.div.appendChild(petsAvaragePrice);

		let whiteFlaffyPets = document.createElement('ul');
		whiteFlaffyPets.setAttribute('class','whiteFlaffyPets');
		this.div.appendChild(whiteFlaffyPets);
	}
};
