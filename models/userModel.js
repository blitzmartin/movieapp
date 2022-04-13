const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: {type: String}
})

module.exports = new mongoose.model('Task', userSchema);