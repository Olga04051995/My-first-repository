'use strict';

class Hamster extends Pet {
	constructor(color, price, fluffyPoints) {
		super(color, price);
		this.fluffyPoints = fluffyPoints;
	}

	toString () {
		return `Hello, am a ${this.color} hamster, my price is ${this.price} and  fluffy is ${this.isFluffy()}`
	}

	isFluffy () {
		return this.fluffyPoints >= 2 &&  this.fluffyPoints <= 10 ? true : false;
    }
};