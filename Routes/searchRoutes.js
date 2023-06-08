//search routes
const express = require('express');
const router = express.Router();

const event = require('../Models/event');

router.post('/dash/uevent-search', async(req , res) => {
      const heading = 'Upcoming';
      const events = await event.find({status: 'Upcoming'});
      res.render('search/show-search', { events, heading: heading })
})

router.post('/dash/oevent-search', async(req , res) => {
      const heading = 'Ongoing';
      const events = await event.find({status: 'Ongoing'});
      res.render('search/show-search', { events, heading: heading })
})

router.post('/dash/cevent-search', async(req , res) => {
      const heading = 'Complete';
      const events = await event.find({status: 'Complete'});
      res.render('search/show-search', { events, heading: heading })
})

module.exports = router;