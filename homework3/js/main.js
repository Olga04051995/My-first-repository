'use strict';
document.addEventListener("DOMContentLoaded", function () {

    let petShopModel = new PetShop();
    let pets = [new Cat('white', 600, 'Kitty', 'true'),
        new Cat('grey', 400, 'Tom', 'true'),
        new Cat('white', 200, 'Simbad', 'false'),
        new Dog('black', 700, 'Chappy'),
        new Dog('black', 200, 'Bolto'),
        new Dog('black', 600, 'Jack'),
        new Hamster('sandy', 130, 'true'),
        new Hamster('yellow', 430, 'true'),
        new Hamster('white', 330, 'false')
    ];

    petShopModel.addPets(pets);


    let view = new PetShopView(petShopModel);
    view.render('.pet-shop');

}, false);