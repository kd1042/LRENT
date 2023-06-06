const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipment = require('./equipment');
const { boolean } = require('joi');

const eventSchema = new Schema({
    name:String,
    location:String,
    date:String,
    status:String,
    equipment:[{
        type: Schema.Types.ObjectId,
        ref:'equipment'
}] 
})

module.exports = mongoose.model('events',eventSchema);