const express = require('express')
const router = express.Router();

const event = require('../Models/event')
const equipment = require('../Models/equipment')


router.get('/details', async(req,res) => {
    const events = await event.find()
    res.render('event/index',{ events })
})

router.get('/details/new', async(req,res) => {
    res.render('event/new')
}) 

router.post('/details/new', async(req,res) => {
    const events = new event({
         name:req.body.name,
         location:req.body.location,
         date:req.body.date,
         status:req.body.status});

    await events.save();     
    res.redirect('/details')
})

//show details page
router.get('/details/:id', async(req, res) => {
    let canHave
    const events = await event.findById(req.params.id).populate('equipment');
    const Equipments = await equipment.find({});
    res.render('event/detail',{ events, Equipments, canHave: canHave })
})

//add to required equipment for show
router.post('/details/:id', async(req, res) => {
    const events =  await event.findById(req.params.id);
    const items = req.body.name //returns objectid 
    for(let item of items){  //iterate over every object id and place it inside equipment array in event db 
        events.equipment.push(item);
    }
    await events.save();
    res.redirect(`/details/${req.params.id}`)
})

module.exports = router;