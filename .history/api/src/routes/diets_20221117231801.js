const { Router } = require('express');
const router = Router();
const {Diet} = require('../db');
const {diets} = require('../data/diets')

router.get('/', async (req,res) => {
    //console.log(diets);
        diets.forEach(e => {
            Diet.findOrCreate({
                where: {name:e.name}
            })
        })

        const allTheTypes = await Diet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;