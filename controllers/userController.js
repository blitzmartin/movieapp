const taskModel = require("../models/userModel");

const createUser = function (req, res) {
    res.render('register');
    console.log("Utility msg: registration routing working!")
}

module.exports = { createUser };