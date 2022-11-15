const {createDiet} = require('../controllers/diets');
const{ diets} = require('../data/diets');

const loadData = async () => {

    try {
         for (let diet of diets  ) {
        await createDiet(diet)
    }
    console.log(diets)
}
     catch (error) {
        console.log(error)
    }

};

module.exports = {loadData};