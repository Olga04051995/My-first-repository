'use strict';
document.addEventListener("DOMContentLoaded", function () {

    let petShopModel = new PetShop();
    let pets = [new Cat('white', 600, 'Kitty', 3),
        new Cat('grey', 400, 'Tom', 6),
        new Cat('white', 200, 'Simbad', 7),
        new Dog('black', 700, 'Chappy'),
        new Dog('black', 200, 'Bolto'),
        new Dog('black', 600, 'Jack'),
        new Hamster('sandy', 130, 3),
        new Hamster('yellow', 430, 1),
        new Hamster('white', 330, 8)
    ];

    petShopModel.addPets(pets);


    let view = new PetShopView(petShopModel);
    view.render('.pet-shop');

}, false);