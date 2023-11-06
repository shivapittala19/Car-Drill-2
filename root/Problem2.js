const inventory = require('../inventory')

function Problem2(inventory){
    let lastItemIndex = inventory.length
    const array =  inventory.filter((item)=>{
        return item.id == lastItemIndex
    })
    const { car_year: year, car_make: make, car_model: model,id:id } = array[0];
    return `Last car is a ${make} ${model}`

    
}

module.exports = Problem2;