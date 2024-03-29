const { Router } = require('express');
const router = Router();
const {TypeOfDiet} = require('../db');
const {diets} = require('../controllers/diets')

router.get('/', async (req,res) => {
    //console.log(diets);
        diets.forEach(e => {
            TypeOfDiet.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await TypeDiet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;