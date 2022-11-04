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
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    const apiRecipes =await getUrl.data.map(e =>{
        return{
            id: e.id,
            name: e.title,
            resume: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            howToMake: e.analyzedInstructions,

        }
    })
    return apiRecipes;
}
router.use
module.exports = router;
