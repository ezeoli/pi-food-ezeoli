const { Router, application } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');


const router = Router();

const {getAllRecipes} = require('../controllers/allData');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


    
   





   router.get('/', async (req, res) =>{
    
     
    try { 
        let apiDbRecipesGet = await getAllRecipes();
        
             res.status(200).send(apiDbRecipesGet);
        }
        
     catch (error) {
        res.status(404).send("Something wrong during loading information ");
    }
    
})

const recipes = require('./recipes');
const recipesId = require('./recipesId');
const createRecipe= require('./createRecipe');
const diets = require('./diets')


router.use('/recipes', recipes)
router.use('/recipes', recipesId)
router.use('/recipes', createRecipe)
router.use('/diets',diets)



module.exports = router;
