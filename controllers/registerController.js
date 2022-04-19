const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

function showRegister (req, res) {
    res.render('register');
};

//CRUD operations

//CREATE
const createUser = async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await userModel.create({
            username: req.body.username, 
            password: hashedPassword 
        });
        res.render('success');  //when working, redirect to logged homepage
    } catch (err) {
        console.log(err)
    }
};

module.exports = { showRegister, createUser };