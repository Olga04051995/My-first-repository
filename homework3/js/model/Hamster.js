'use strict';

class Hamster extends Pet {
	constructor(color, price, isFlaffy) {
		super(color, price);
		this.isFlaffy = isFlaffy;
	}

	toString() {
		return `Hello am a ${this.color} hamster, my price is ${this.price} and  fluffy is ${this.isFlaffy}`
	}
};