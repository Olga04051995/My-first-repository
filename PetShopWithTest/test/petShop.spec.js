describe('Pet shop store', function () {
    let petShopStore, pets;

    beforeEach(function () {
        petShopStore = new PetShop();

        pets = [new Cat('white', 600, 'Kitty', 'true'),
            new Cat('grey', 400, 'Tom', 'true'),
            new Cat('white', 200, 'Simbad', 'false'),
            new Dog('black', 700, 'Chappy'),
            new Dog('black', 200, 'Bolto'),
            new Dog('black', 600, 'Jack'),
            new Hamster('sandy', 130, 'true'),
            new Hamster('yellow', 430, 'true'),
            new Hamster('white', 330, 'false')
        ];

        petShopStore.addPets(pets);
    });

    it('pet shop list should not be undefined', function () {
        expect(petShopStore.petList).not.toBeUndefined();
    })

    it('pet shop list length should be 9', function () {
        expect(petShopStore.petList.length).toBe(9);
    })

    it('on call getByType with parameter Cat should return 3 cats', function () {
        expect(petShopStore.getByType(Cat).length).toBe(3);
    })

    it('on call getByType with parameter Dog should return 3 cats', function () {
        expect(petShopStore.getByType(Dog).length).toBe(3);
    })

    it('on call getByType with parameter Hamster should return 3 cats', function () {
        expect(petShopStore.getByType(Hamster).length).toBe(3);
    })

    it('on call getGreaterThanEvaragePrice should return 5', function () {
        expect(petShopStore.getGreaterThanEvaragePrice().length).toBe(5);
    })
	
    it('on call clearList pet list length should be 0', function () {
        petShopStore.clearList();
        expect(petShopStore.petList.length).toBe(0);
    })

    it('on call _getAvaragePrice  should be 400', function () {
        expect(petShopStore._getAvaragePrice()).toBe(398.8888888888889);
    })
});