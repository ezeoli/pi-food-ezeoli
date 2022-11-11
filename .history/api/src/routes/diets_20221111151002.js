const { Router } = require('express');
const router = Router();
const {TypeOfDiet} = require('../db');
const {diets} = require('../controllers/dbDiets')

router.get('/', async (req,res) => {
    //console.log(diets);
        diets.forEach(e => {
            TypeOfDiet.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await TypeOfDiet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;