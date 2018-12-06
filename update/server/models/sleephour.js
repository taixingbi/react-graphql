const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleephourSchema = new Schema({
    hour: Number,
    date: String
});

module.exports = mongoose.model('Sleephour', sleephourSchema);