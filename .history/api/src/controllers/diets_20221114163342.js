const {TypeOfDiet} = require('../db');

const createDiet = (diet) =>    TypeOfDiet.findOrCreate({
    where: {name:diet.name}
})


module.exports = {createDiet};