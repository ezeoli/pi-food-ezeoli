const {createDiet} = require('../controllers/diets');
const{ diets} = require('../data/diets');

const loadData = async () => {

    for (let diet of diets  ) {
        await createDiet(diet)
    }
}
module.exports = {loadData};