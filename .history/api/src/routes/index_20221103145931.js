const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const API_KEY  = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getRecipes = async () => {
    const getUrl = await axios.get(https://api.spoonacular.com/recipes/complexSearch&addRecipeInformation=true?apiKey=API_KEY);
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
}
module.exports = router;
