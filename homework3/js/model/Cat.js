'use strict';

class Cat extends Pet {
	constructor (color, price, name, fluffyPoints) {
		super(color, price);
        
		this.name = name;
		this.fluffyPoints;	
	}

	 toString () {
        return `Hello, my name is ${this.name}, color is ${this.color},  price - ${this.price} and  fluffy is ${this.isFluffy()}`
    }

    isFluffy () {
        return this.fluffyPoints >= 5 &&  this.fluffyPoints <= 10 ? true : false;
    }
};