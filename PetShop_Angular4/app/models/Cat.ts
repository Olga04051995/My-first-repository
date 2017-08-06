import { Pet } from "./Pet";

export class Cat extends Pet {
    color: string;
    price: number;
    name: string;
    isFlaffy: boolean;

    constructor(color: string, price: number, name: string, isFlaffy: boolean) {
        super(color, price);

        this.name = name;
        this.isFlaffy = isFlaffy;
    }

    isFluffy() {
        return this.isFlaffy === true ? true : false;
    }

    toString() {
        return `Hello, my name is ${this.name}, color is ${this.color},  price - ${this.price} and  fluffy is ${this.isFlaffy}`
    }
};