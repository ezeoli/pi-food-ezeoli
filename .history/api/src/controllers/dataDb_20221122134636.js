const {Recipe,Diet} = require('../db');



const getRecipesDb = async () => {
 try {
  const dbInfo = await Recipe.findAll({
      include:{
          model: Diet,
           attributes:['name'],
          through:{
            attributes: [],
         }
  
      }
    });
    let response = await dbInfo?.map((recipe) => {

      return {
          id: recipe.id,
          name: recipe.name,
          resume: recipe.resume,
          healthScore: recipe.healthScore,
          image: recipe.image,
          howToMake: recipe.howToMake,
          createdInDb: recipe.createdInDb,
          diets:recipe.diets?.map((diet) => diet.name),
      }; 
   });
  return response;
 } catch (error) {
  console.log("Something wrong during request information");
 }   
  
  };

  const getRecipeByIdFromDb = async (id) => {
   
    const dbInfo = await Recipe.findByPk(id,
    {
      include:{
          model: Diet,
           attributes:['name'],
          through:{
            attributes: [],
         }
  
      }    
    }  
  );
  
  return {
    id: dbInfo.id,
    name: dbInfo.name,
    resume: dbInfo.resume,
    healthScore: dbInfo.healthScore,
    image: dbInfo.image,
    howToMake: dbInfo.howToMake,
    createdInDb: dbInfo.createdInDb,
    diets:dbInfo.diets?.map((diet) => diet.name),
}; 

};
module.exports = {getRecipesDb,getRecipeByIdFromDb};