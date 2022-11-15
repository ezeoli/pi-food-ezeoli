//const { Router } = require('express');

require('dotenv').config();
const axios = require('axios');
const {API_KEY2,API_KEY } = process.env;


const getRecipes = async () => {
    const getUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);   
    const apiRecipes =  getUrl.data.results.map((e) =>{
        return{
            id: e.id,
            name: e.title,
            resume: e.summary,
            image: e.image,
            healthScore: e.healthScore,
            diets: e.diets,
            dishTypes:e.dishTypes,
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

  const getRecipeByID =async (id) => {

     const recipes =await getRecipes()
     return recipes.find(recipe => recipe.id === parseInt(id))
  }

module.exports = {getRecipes, getRecipeByID};