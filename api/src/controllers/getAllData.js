const {getRecipes} = require('../controllers/getApiData');
const {getRecipesDb} = require('../controllers/getDataDb');

const getAllRecipes = async() =>{

    try {
        const apiRecipesDetails = await getRecipes();
    const  dbRecipesDetails = await getRecipesDb();
    const allRecipesApiDb = apiRecipesDetails.concat(dbRecipesDetails);
    return allRecipesApiDb;

    } catch (error) {
        console.log("Something wrong during request information");
    }
   } ;


module.exports = {getAllRecipes};