const express = require('express');
const router = express.Router();

const equipment = require('../Models/equipment')
router.get('/equipment', (req , res) => {
    res.render('equipment/show')
})

module.exports = router;