import {Pet} from "./Pet";

export class Hamster extends Pet {
	color : string;
    price : number;
    isFlaffy : boolean;
    
	constructor (color : string, price : number, isFlaffy : boolean) {
        super(color, price);
    
		this.isFlaffy = isFlaffy;	
	}

	toString () {
		return `Hello, am a ${this.color} hamster, my price is ${this.price} and  fluffy is ${this.isFlaffy}`
	}

	isFluffy () {
    	if (this.isFlaffy === true) {
    		return true;
    	} else {
    		return false;
    	}
    }
};