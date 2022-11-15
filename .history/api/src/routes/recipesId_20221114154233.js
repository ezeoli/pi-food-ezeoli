const { Router } = require('express');
const axios = require('axios');
const {getRecipes, getRecipeByID} = require('../controllers/apiData');
const {Recipe,TypeOfDiet} = require('../db');
const router = Router();

router.get('/:id', async (req, res) =>{
    
    
    const {id} = req.params

     if (id === undefined)
        return res.status(400).send({ message: "ID is required" })
    
      const isFromDb = id.includes("-");
      const recipe = isFromDb
      ? await Recipe.findByPk(id, { include: TypeOfDiet })
      : await getRecipeByID(id)

     return recipe ? res.json(recipe)
     : res.status(404).json({ message: "The recipe was not found in DB"})

   
    
});

module.exports = router;