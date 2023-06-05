const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const equipmentSchema = new Schema( {
    name:String,
    qty:Number,
    avail:String,
    type:String,
    Status:Boolean
})

module.exports = mongoose.model('equipment',equipmentSchema);