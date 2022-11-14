const { Router } = require('express');
const axios = require('axios');
const {getAllRecipes} = require('../controllers/getAllData');

const router = Router();

router.get('/:id', async (req, res) =>{
    
    
    const {id} = req.params
    
    
        
    
        if (id === undefined)
        return res.status(400).send({ message: "ID is required" })
        
        let apiDbRecipesGetId = await getAllRecipes();
        
        let recipeId = await apiDbRecipesGetId.filter(e => e.id ===(parseInt(id)));
        
        recipeId.length
        ? res.status(200).json(recipeId)
        : res.status(404).send({ message: "The recipe was not found"});
   
    
});

module.exports = router;