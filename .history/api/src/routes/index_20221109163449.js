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
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&addRecipeInformation=true`);   
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

const getAllRecipes = async() =>{

    try {
        const apiRecipesDetails = await getRecipes();
    const  dbRecipesDetails = await getRecipesDb();
    const allRecipesApiDb = apiRecipesDetails.concat(dbRecipesDetails);
    return allRecipesApiDb;

    } catch (error) {
        console.log("Something wrong during request information");
    }
   } 

   router.get('/', async (req, res) =>{
    
     
    try { 
        let apiDbRecipesGet = await getAllRecipes();
        
             res.status(200).send(apiDbRecipesGet);
        }
        
     catch (error) {
        res.status(404).send("Something wrong during loading information ");
    }
    
})



router.get('/recipes', async (req, res) =>{
    const {name} = req.query
     
     
        let apiDbRecipesGetName = await getAllRecipes();
        if(name){
            let recipeName = await apiDbRecipesGetName.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
           recipeNAme? recipes res.status(200).send(recipeName) :
           res.status(404).send("The recipe does not exist");
        }
        else
     {
        res.status(200).send(apiDbRecipesGet);
     }
    
})

module.exports = router;
