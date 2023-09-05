const mongoose = require('mongoose')
const ansSchema = new mongoose.Schema({
    ques_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Question"
    },
    ans: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    user: Object
});

module.exports = mongoose.model("Answer", ansSchema);