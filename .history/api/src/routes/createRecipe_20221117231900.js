const { Router } = require('express');
const {  Op } = require('sequelize');
const{Recipe,Diet} = require('../db')
const router = Router();

router.post('/', async (req,res) => {
    let {
        name,
        resume,
        healthScore,
       howToMake,
        createdInDb,
        typeDiets
    } = req.body;

    if(!name || !resume) {
        return res.status(400).send('Please, insert a name and a resume to continue!');
    }
    console.log(name); 

    try{let createRecipe = await Recipe.create({
       // id,     
        name,
        resume,
        healthScore,
        howToMake,
       // diets,
        createdInDb
})


//where:{name:typeDiets }
let dietTypeDb = await Diet.findAll( { where:{[Op.or]:[{name:typeDiets}]  }})
     createRecipe.addDiet(dietTypeDb)
    res.status(201).send('The new recipe was created')   

}catch(err){
    res.status(404).send("Something wrong during the recipe creation ");
}
});

module.exports= router;