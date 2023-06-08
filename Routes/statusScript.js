// update show status script
const express = require('express')
const router = express.Router();

const show = require('D:/Code/Projects/LRENT/Models/event')

router.post('/status/upcoming/:id', async(req,res) =>{
    await show.findByIdAndUpdate(req.params.id, {status:'Upcoming'})
    res.redirect(`/details/${req.params.id}`)
})

router.post('/status/ongoing/:id', async(req,res) =>{
    await show.findByIdAndUpdate(req.params.id, {status:'Ongoing'})
    res.redirect(`/details/${req.params.id}`)
})

router.post('/status/complete/:id', async(req,res) =>{
    await show.findByIdAndUpdate(req.params.id, {status:'Complete'})
    res.redirect(`/details/${req.params.id}`)
})

module.exports = router;