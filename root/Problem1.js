const inventory = require('../inventory')

function Problem1(inventory){
    const array =  inventory.filter((item)=>{
        return item.id == 33
    })

    if(array.length  > 0){
        const { car_year: year, car_make: make, car_model: model,id:id } = array[0];
        return `Car ${id} is a ${year} ${make} ${model}`
    }
    else{
        return `No car found with an id of ${id}`
    }

}

module.exports = Problem1;