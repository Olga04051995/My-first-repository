'use strict';

class Pet {
	constructor (color, price) {
		this.color = color;
		this.price = price;
	}

	whiteOrFluffy () {
		 return this.isYourColor('white') || this.isFluffy();
	}

	isFluffy () {
		return;
	}

	isYourColor (_color) {
    return this.color === _color;
	}	
};