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

module.exports = {getRecipesDb};