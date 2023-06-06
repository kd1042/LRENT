const express = require('express')
const router = express.Router();

const show = require('D:/Code/Projects/LRENT/Models/event');
const equipment= require('../Models/equipment');

router.post('/check/:id', async(req, res) => {
    const shows = await show.find({});
     for(let Show of shows){
        for(let i = 0; i < Show.equipment.length; i++){
            let index = Show.equipment[i];
            const item = await equipment.findById(index);
            const requiredQty = req.body.rqty;
            const onHand = item.qty;
            if(requiredQty[i] <= onHand){
                
                console.log('works')
        }
     }
     res.redirect(`/details/${req.params.id}`)
}})

module.exports = router;

