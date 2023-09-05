const mongoose = require('mongoose')
const quesSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags:[],
    created_at: {
        type: Date,
        default: Date.now(),
    },
    user: Object
});

module.exports = mongoose.model("Question", quesSchema);