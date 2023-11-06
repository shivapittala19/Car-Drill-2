const inventory = require('../inventory')

function Problem4(inventory){
    const carYear = inventory.map( (car) =>car.car_year)
    return carYear
}
module.exports = Problem4;