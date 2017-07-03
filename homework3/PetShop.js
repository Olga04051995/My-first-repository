'use strict';
document.addEventListener("DOMContentLoaded", function () {

    let cat1 = new Cat('white', '600', 'Kitty', 'true');
    let cat2 = new Cat('grey', '400', 'Tom', 'true');
    let cat3 = new Cat('white', '200', 'Simbad', 'false');
    let dog1 = new Dog('black', '700', 'Chappy');
    let dog2 = new Dog('black', '200', 'Bolto');
    let dog3 = new Dog('black', '600', 'Jack');
    let hamster1 = new Hamster('sandy', '130', 'true');
    let hamster2 = new Hamster('white', '430', 'true');
    let hamster3 = new Hamster('white', '330', 'false');
    
    let pets = [cat1, cat2, cat3, dog1, dog2, dog3, hamster1, hamster2, hamster3];

    let view = new PetShopView('.pet-shop');

    view.createList();

    pets.forEach(function(item) {

    	let allCats = document.querySelector('.allCats');
    	let petsAvaragePrice = document.querySelector('.petsAvaragePrice');
    	let whiteFlaffyPets = document.querySelector('.whiteFlaffyPets');
  		

  		if (item instanceof Cat) {
  			let li = document.createElement('li');

  			allCats.appendChild(li);
  			li.innerHTML = item.name;
  		}

  		if (item.price > 370) {
  			let li = document.createElement('li');

  			petsAvaragePrice.appendChild(li);

  				if (item instanceof Hamster) {
  					li.innerHTML = 'Hamster';
  				} else { 
  					li.innerHTML = item.name;
  				}	
  		}

  		if (item.isFlaffy === 'true' && item.color === 'white') {
  			let li = document.createElement('li');

  			whiteFlaffyPets.appendChild(li);

  				if (item instanceof Hamster) {
  					li.innerHTML = 'Hamster';
  				} else { 
  					li.innerHTML = item.name;
  				}	
  		}
	}); 
}, false);