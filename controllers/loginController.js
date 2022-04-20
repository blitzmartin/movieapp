const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

const showLogin = function (req, res) {
    res.render('login');
}

const findUser = async (req, res) => {
    passport.authenticate('local',{
        successRedirect: '/user',
        failureRedirect: '/login'
    })(req, res);
}

module.exports = { showLogin, findUser };


