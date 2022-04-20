const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

// Loads login page
const showLogin = function (req, res) {
    res.render('login');
}

// Checks if user has an account and if the password is correct
const findUser = async (req, res) => {
    passport.authenticate('local',{
        successRedirect: '/user',
        failureRedirect: '/login'
    })(req, res);
}

module.exports = { showLogin, findUser };


