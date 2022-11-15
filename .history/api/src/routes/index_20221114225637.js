const { Router, application } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');


const router = Router();

const {getAllRecipes} = require('../controllers/allData');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


 
const recipes = require('./recipes');
const recipesId = require('./recipesId');
const createRecipe= require('./createRecipe');
const diets = require('./diets')


router.use('/recipes', recipes)
router.use('/recipes', recipesId)
router.use('/recipes', createRecipe)
router.use('/diets',diets)



module.exports = router;
