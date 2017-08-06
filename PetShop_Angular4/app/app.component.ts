import { Component } from '@angular/core';
import { PetShop } from "./models/PetShop";
import { Cat } from "./models/Cat";
import { Dog } from "./models/Dog";
import { Hamster } from "./models/Hamster";
import { Pet } from "./models//Pet";

@Component({
    selector: 'pet-shop',
    template: ` <pet-list [title]="listTitle" [pets]="selectedPets"> </pet-list>
                <button (click)="showPetList('Cats')">Show all cats</button>
                <button (click)="showPetList('ExpensivePets')">Show all expensive pets</button>
                <button (click)="showPetList('Fluffy')">Show all fluffy and white pets</button>`
})

export class PetShopComponent {
    petShop: PetShop;
    listTitle: string;
    selectedPets: Pet[];

    constructor () {
        this.petShop = new PetShop();

        this.petShop.addPets([new Cat('white', 600, 'Kitty', true),
            new Cat('grey', 400, 'Tom', true),
            new Cat('white', 200, 'Simbad', false),
            new Dog('black', 700, 'Chappy'),
            new Dog('black', 200, 'Bolto'),
            new Dog('black', 600, 'Jack'),
            new Hamster('sandy', 130, true),
            new Hamster('yellow', 430, true),
            new Hamster('white', 330, false)
        ]);
    }

    showPetList (value: string) {
        this.listTitle = value;

        if (value === 'Cats') {
            this.selectedPets = this.petShop.getByType(Cat);
        } else if (value === 'ExpensivePets') {
            this.selectedPets = this.petShop.getGreaterThanEvaragePrice();
        } else if (value === 'Fluffy') {
            this.selectedPets = this.petShop.getFluffyAndWhite();
        }
    }
}
