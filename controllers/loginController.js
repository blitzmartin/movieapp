const userModel = require("../models/userModel");  //it's important to require model when getting or posting thing to db!!
const moviesModel = require("../models/moviesModel");
const bcrypt = require('bcrypt');
const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

const showLogin = function (req, res) {
    res.render('login');
}

const findUser = async (req, res) => {
    passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login'
    })(req, res);
}

/* 
const findUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //METHOD WITHOUT PASSPORT
    userModel.findOne({username: username}, function (err, foundUser){
        if (err) {    
            console.log(err)
        }   else {
            if (foundUser){
                const result = bcrypt.compare(password, user.password)
                if (result) {
                        moviesModel.find({})
                        .then(data => {
                          res.render('user-index', {movies: data});
                        })
                        .catch((err)=>{           
                          console.log(err);
                        })
                }
            }
        }
   })
} */

module.exports = { showLogin, findUser };