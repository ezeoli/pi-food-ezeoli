//const { Router } = require('express');

require('dotenv').config();
const axios = require('axios');
const {API_KEY2,API_KEY,API_KEY3,API_KEY1,API_KEY4,API_KEY5,API_KEY6,API_KEY7 } = process.env;


const getRecipes = async () => {
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&number=100&addRecipeInformation=true`);   
    const apiRecipes =  getUrl.data.results.map((e) =>{
        return{
            id: e.id,
            name: e.title,
            resume: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            diets: e.diets?.map((ele) => ele),
            dishTypes:e.dishTypes?.map((ele) => ele),
            howToMake: e.analyzedInstructions[0] &&
            e.analyzedInstructions[0].steps
            ? e.analyzedInstructions[0].steps
                .map((item) => item.step)
                .join(" \n")
            : "",
                
            }
        });
          return apiRecipes;
        };

  const getRecipeByIdFromApi =async (id) => {

     const recipes =await getRecipes()
     return recipes.find(recipe => recipe.id === parseInt(id))
  }
    
 
  
 
  


module.exports = {getRecipes, getRecipeByIdFromApi};