const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require('dotenv').config();
const axios = require('axios');

const {API_KEY } = process.env;
const {Recipe,TypeOfDiet} = require('../db')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getRecipes = async () => {
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);   
    const apiRecipes = await getUrl.data.results.map((e) =>{
        return{
            id: e.id,
            name: e.title,
            resume: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            diets: e.diets,
            howToMake: e.analyzedInstructions?.map((el)=> el.steps.map((ele)=>{
                 return {
                number : ele.number,
                step:  ele.step,
            } 
            }
             
          
            )),
                
            }
        });
          return apiRecipes;
        };
    
    

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

}

const getAllrecipes = async() =>{
    const apiRecipesDetails = await getRecipes();
    const  dbRecipesDetails = await getRecipesDb();
    const allRecipesApiDb = apiRecipesDetails.concat(dbRecipesDetails);
    return allRecipesApiDb
}

router.get('/recipes', async (req, res) =>{
    //const name = req.query.name
    try { //if(name)
        let apiRecipesGet = await getRecipes();
    res.status(200).send(apiRecipesGet);
    } catch (error) {
        res.status(404).send(error);
    }
    
})

module.exports = router;
