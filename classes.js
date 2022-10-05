// CLASSES ARE BLUEPRINTS FOR OBJECTS

// const lion = {
//     legs: 4;
//     color: "golden",
//     diet: "Carnivores"
// }
// const zebra = {
//     legs: 4,
//     color: "black and white",
//     diet: "Herbivores"
// }

// Class is a reserved JS keyword
// Class always starts with capital

class Animal{
    // use the consstructor method
    constructor(name, legs, color, diet){
        // create the keys for each
        this.name = name;
        this.legs = legs;
        this.color = color;
        this.diet = diet;
    }
    // This is a METHOD INN OUR CONSTRUCTOR
    bathing(){
        this.isBathing = true
        console.log(this.name + " is bathing.")
    }
}
let lion = new Animal("Lion", "4", "Golden", "Carnivore");
let zebra = new Animal("Zebra", "4", "Black & White", "Herbivore");
console.log(zebra);
zebra.bathing()
lion.bathing()


class Car{
    constructor(makeParam, modelParam, yearParam, doorsParam, locationParam, priceParam){
        this.Make = makeParam;
        this.Model = modelParam;
        this.Year = yearParam;
        this.Doors = doorsParam;
        this.Location = locationParam;
        this.Price = priceParam;
    }
    driving(){
        isDriving = true;
        console.log(this.make + " is driving")
    }
}

let car1 = new Car("Ford", "Mustang", "2021", "2", "5 miles away", "$52,000")
let car2 = new Car("Dodge", "Durango", "2019", "4", "25 miles away", "$85,000")
let car3 = new Car("Honda", "Accord", "2018", "4", "2 miles away", "$30,000")
