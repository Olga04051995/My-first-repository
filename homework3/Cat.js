'use strict';

class Cat extends Pet {
	constructor (color, price, name, isFlaffy) {
		super(color, price);
		this.name = name;
		this.isFlaffy = isFlaffy;	
	}
};