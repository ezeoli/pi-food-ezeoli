const {TypeOfDiet} = require('../db');

const createDiets = () =>    TypeOfDiet.findOrCreate({
    where: {name:e.name}
})


