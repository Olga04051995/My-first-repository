import { Input, Component } from '@angular/core';
import { Pet } from  "./models//Pet";

@Component({
    selector: 'pet-list',
    template: ` <h5>{{title}}</h5>
                <ul>
                    <li *ngFor="let pet of pets">{{pet.toString()}}</li>
                </ul>`
})

export class PetListComponent { 
    @Input() pets: Pet[];
    @Input() title : string;
}