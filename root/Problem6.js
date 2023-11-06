const inventory = require('../inventory')

function Problem6(inventory){
    const bmwAudiCars = inventory.filter((car) => car.car_make === "BMW" || car.car_make === "Audi")
    return bmwAudiCars
}

module.exports = Problem6;