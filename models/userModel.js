const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    favprite: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        default : []
    }]
})

module.exports = new mongoose.model('User', userSchema);