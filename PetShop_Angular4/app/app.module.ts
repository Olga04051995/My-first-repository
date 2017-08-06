import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PetShopComponent }   from './app.component';
import { PetListComponent }   from './petList.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ PetShopComponent, PetListComponent ],
    bootstrap:    [ PetShopComponent ]
})

export class AppModule { }