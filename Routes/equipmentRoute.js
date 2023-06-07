const express = require('express');
const router = express.Router();

const equipment = require('../Models/equipment')

router.get('/equipment', async(req , res) => {
    const Equipments = await equipment.find({});
    res.render('equipment/show', { Equipments })
})

router.get('/equipment/new', (req, res) => {
    res.render('equipment/add')
})

router.post('/equipment/new', async(req , res) => {
    const Equipments = new equipment({
        name:req.body.name,
        qty:req.body.qty,
        avail:req.body.avail,
        type:req.body.type,
        Status:req.body.status
    });
    await Equipments.save();
    res.redirect('/equipment')
})

module.exports = router;