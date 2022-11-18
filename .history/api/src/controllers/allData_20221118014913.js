const {getRecipes,getRecipeByIdFromApi} = require('./apiData');
const {getRecipesDb,getRecipeByIdFromDb} = require('./dataDb');

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
     
   
    const getRecipeByID = async (id) => {
   // try {
    //const  isFromDb = id.includes("-");
    //return isFromDb ? 
   // getRecipeByIdFromDb(id)
   // : getRecipeByIdFromApi(id)  
   // } catch (error) {
    //console.log("Something wrong during request information by ID");
   //}
   const recipesTotal = await getAllRecipes();
   
   if(id){
           let recipeId = await recipesTotal.filter((r) => r.id === id);
           
         return recipeId ;
    };
   
};
    

module.exports = {getAllRecipes,getRecipeByID};