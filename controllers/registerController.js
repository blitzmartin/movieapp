const userModel = require("../models/userModel");

function showRegister (req, res) {
    res.render('register');
};

//CRUD operations

//CREATE
async function createUser (req, res) {
    try{
        const newUser = await userModel.create({username: req.body.username, password: req.body.password});
        res.redirect('/');  //when working, redirect to logged homepage
    } catch(err) {
        console.log(err)
    }
};

module.exports = { showRegister, createUser };