const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require('dotenv').config();
const axios = require('axios')
const {API_KEY } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getRecipes = async () => {
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ef53c8ba85f74f28bebd19436ccfec53&number=100&addRecipeInformation=true`);   
    const apiRecipes = await getUrl.data[0].map((e) =>{
        return{
            id: e.id,
            name: e.title,
            resume: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            howToMake: e.analyzedInstructions,

        };
    });
    return apiRecipes;
};

router.get('/', async (req, res) =>{
    
    let apiRecipesGet = await getRecipes();
    res.status(200).send(apiRecipesGet);
})

module.exports = router;
