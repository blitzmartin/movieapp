const userModel = require("../models/userModel");

const showRegister = function (req, res) {
    res.render('register');
    console.log("Utility msg: registration routing working!")
}
//CRUD operations

//CREATE
async function createUser (req, res) {
    try{
        const newUser = await userModel.create({username: req.body.username},{password: req.body.password});
        res.redirect('/');
    } catch(err) {
        console.log(err)
    }
};

module.exports = { showRegister, createUser };