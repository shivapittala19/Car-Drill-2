const inventory = require('../inventory')

function Problem3(inventory){
    const carNames = inventory.map( (car) =>car.car_model.toLowerCase())
    return carNames.sort()
}

module.exports = Problem3;