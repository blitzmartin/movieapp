const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

// Loads registration page
async function showRegister (req, res) {
    res.render('register');
};


// Creates user
const createUser = async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await userModel.create({
            username: req.body.username, 
            password: hashedPassword 
        });
        res.render('success');
    } catch (err) {
        console.log(err)
    }
};

module.exports = { showRegister, createUser };
