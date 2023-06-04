const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const equipmentSchema = new Schema( {
    name:String,
    qty:Number,
    avail:String,
    Status:String
})

module.exports = mongoose.model('equipment',equipmentSchema);