const {Recipe,TypeOfDiet} = require('../db');



const getRecipesDb = async () => {
    
  const dbInfo = await Recipe.findAll({
      include:{
          model: TypeOfDiet,
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
          score: recipe.score,
          healthScore: recipe.healthScore,
          image: recipe.image,
          howToMake: recipe.howToMake,
          createdInDb: recipe.createdInDb,
          diets:recipe.diets?.map((diet) => diet.name),
      }; 
   });
  return response;
  };

const getRecipeByIdFromDb = (id) => Recipe.findByPk(id, { include: TypeOfDiet });

module.exports = {getRecipesDb,getRecipeByIdFromDb};