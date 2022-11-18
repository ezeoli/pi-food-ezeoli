const {Diet} = require('../db');

const createDiet = (diet) =>    Diet.findOrCreate({
    where: {name:diet.name}
})


module.exports = {createDiet};