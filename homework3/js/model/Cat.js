'use strict';

class Cat extends Pet {
	constructor (color, price, name, isFlaffy) {
		super(color, price);
        
		this.name = name;
		this.isFlaffy = isFlaffy;	
	}

	 toString () {
        return `Hello, my name is ${this.name}, color is ${this.color},  price - ${this.price} and  fluffy is ${this.isFlaffy}`
    }

    isFluffy () {
    	if (this.isFlaffy === 'true') {
    		return true;
    	} else {
    		return false;
    	}
    }
};