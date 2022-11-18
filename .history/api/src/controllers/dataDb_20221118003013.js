const {Recipe,Diet} = require('../db');



const getRecipesDb = async () => {
    
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
  };

const getRecipeByIdFromDb = (id) => Recipe.findByPk(id, { include: Diet });

module.exports = {getRecipesDb,getRecipeByIdFromDb};