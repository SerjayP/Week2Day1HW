// OBJECTS
//  are key value pairs
//  keys are always strings
// const car = {
//     make: "Toyota",
//     model: "Camry",
//     color: "Orange",
//     year: "1999",
//     drive: ()=>{
//         console.log(`The ${car.make} is driving`)
//     }
// }

// console.log(car)
//                      to access data in an object, we use dot notation

// console.log(car.make)
//                      to just see keys

// console.log(Object.keys(car))
//                      to see values 

// console.log(Object.values(car))
//                      to delete key and value pair
// delete myObject.key
//                      using functions in objects
// car.drive()
//                      this.
const carOne = {
    make: "Toyota",
    model: "Camry",
    color: "Orange",
    year: "1999",
    drive: function(){
        console.log(`The ${this.make} is driving`)
    },
    owners: ["Bob", "Sally", "Sue"]
}
carOne.drive()
console.log(carOne.owners[1])