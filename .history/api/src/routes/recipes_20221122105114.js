const { Router } = require('express');
const axios = require('axios');
const {getAllRecipes} = require('../controllers/allData');

const router = Router();

router.get('/', async (req, res) =>{
    const {name} = req.query
 try {
   
let apiDbRecipesGetName = await getAllRecipes();

    if(name){
      let recipeName = await apiDbRecipesGetName.filter(e => e.name.toLowerCase().includes(name.toLowerCase())); recipeName.length ?
      res.status(200).send(recipeName) :
      res.status(404).send("The recipe does not exist");
    }
    else
 {
    res.status(200).send(apiDbRecipesGetName);
 }
   
 } catch (error) {
   console.log("Something wrong during request information");
 }
    

});

module.exports = router;