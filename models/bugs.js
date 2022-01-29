const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    bugId: String,
    bugName: String,
    addedBy: String,
    status: { type: String,
      default: 'raised'},
    priority: String,
    deadline: String,
    source: String,
})

module.exports = mongoose.model('bugs', taskSchema)