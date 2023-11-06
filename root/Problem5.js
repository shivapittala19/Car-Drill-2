const inventory = require('../inventory')
const carYear = require('./Problem4')

function Problem5(inventory,carYear){
    const yearGreater = carYear.filter( (year) => year < 2000)
    return yearGreater
}

module.exports = Problem5;