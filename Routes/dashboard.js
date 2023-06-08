//dashboard Routes

const express = require('express');
const router = express.Router();

const event = require('../Models/event');
let calevents = [];

router.get('/', async(req, res) =>{
    const shows = await event.find({})

    const counter = {
        upcoming: 0,
        ongoing: 0,
        complete:0
    }
    for(let show of shows){
      //  calevents.push(show);
       if(show.status == 'Upcoming'){
         counter.upcoming += 1
       }else if(show.status == 'Ongoing'){
         counter.ongoing += 1
       }else{
         counter.complete += 1
       }
    }

    res.render('home/dashboard', { counter, calevents: calevents })
})

module.exports = router;