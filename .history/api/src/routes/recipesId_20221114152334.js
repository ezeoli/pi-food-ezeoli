const { Router } = require('express');
const axios = require('axios');
const {getRecipes} = require('../controllers/apiData');
const {Recipe,TypeOfDiet} = require('../db');
const router = Router();

router.get('/:id', async (req, res) =>{
    
    
    const {id} = req.params
    
    const validate = id.includes("-");
    
    if (id === undefined)
        return res.status(400).send({ message: "ID is required" })

    if (validate) {
        try {
          const dbId = await Recipe.findByPk(id, { include: TypeOfDiet });  // entonce la busco directo de la base de datos
          res.status(200).json(dbId);
        } catch (err) {
         
          res.status(404).send({ message: "The recipe was not found in DB"});
        }
      }
      
  else {
        const apiRecipesGetId = await getRecipes();
        
        const recipeId =  apiRecipesGetId.find(e =>{
          
          console.log("nat", e.id) 
          console.log("wally", parseInt(id)) 
            return e.id ===(parseInt(id))  
        } );
        
        recipeId.length
        ? res.status(200).json(recipeId)
        : res.status(404).send({ message: "The recipe was not found"});
  }
    
});

module.exports = router;