const { Schema, model } = require('mongoose');

const History = new Schema({
    type: String,
    num_1: Number,
    num_2: Number,
    result: Number,
});

module.exports = model('History', History);