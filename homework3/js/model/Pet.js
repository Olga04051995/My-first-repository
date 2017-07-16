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

	isYourColor (color) {
 	   return this.color === color;
	}	
};