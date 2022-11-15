const {Recipe,TypeOfDiet} = require('../db');



const getRecipesDb = async () => {
    return await Recipe.findAll({
      include:{
          model: TypeOfDiet,
           attributes:['name'],
          through:{
            attributes: [],
         }
  
      }
    })
  
  };

  const getRecipeByIdFromDb = (id) => Recipe.findByPk(id, { include: TypeOfDiet });

module.exports = {getRecipesDb,getRecipeByIdFromDb};