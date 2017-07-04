'use strict';

class Dog extends Pet {
	constructor (color, price, name) {
		super(color, price);
		this.name = name;
	}

	 toString () {
        return `Hello my name is ${this.name}, color is ${this.color},  price - ${this.price} `
    }
};