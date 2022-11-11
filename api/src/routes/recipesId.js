const { Router } = require('express');
const axios = require('axios');
const {getAllRecipes} = require('../controllers/getAllData');

const router = Router();

router.get('/:id', async (req, res) =>{
    
    const {id} = req.params
 
    let apiDbRecipesGetId = await getAllRecipes();

    if(id){
        
             let recipeId = await apiDbRecipesGetId.filter(e => e.id === parseInt(id));
       recipeId.length ?  res.status(200).json(recipeId): 
        
            res.status(404).send("The recipe was not found");
        
         }
   

});

module.exports = router;