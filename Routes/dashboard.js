//dashboard Routes
const express = require('express');
const router = express.Router();
const event = require('../Models/event');

router.get('/', async(req, res) =>{
    const shows = await event.find({})

    const counter = {
        upcoming: 0,
        ongoing: 0,
        complete:0
    }
    for(let show of shows){
       if(show.status == 'Upcoming'){
         counter.upcoming += 1
       }else if(show.status == 'Ongoing'){
         counter.ongoing += 1
       }else{
         counter.complete += 1
       }
    }
    res.render('home/dashboard', { counter, shows })
})

router.get('/calendar-update', async(req, res) => {
  const Shows = await event.find({});
  res.json(Shows); 
})


module.exports = router;