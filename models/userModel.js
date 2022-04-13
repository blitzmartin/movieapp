const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: {type: String}
})

module.exports = new mongoose.model('User', userSchema);