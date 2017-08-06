import {Pet} from "./Pet";

export class Dog extends Pet {
	color : string;
    price : number;
    name : string;
    
	constructor (color : string, price : number, name : string) {
        super(color, price);
        
		this.name = name;
    }
	 toString () {
        return `Hello, my name is ${this.name}, color is ${this.color},  price - ${this.price} `
    }
};