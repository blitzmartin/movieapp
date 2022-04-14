const userModel = require("../models/userModel");  //it's important to require model when getting or posting thing to db!!

const showLogin = function (req, res) {
    res.render('login');
}

const findUser = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //METHOD WITHOUT PASSPORT
    userModel.findOne({username: username}, function (err, foundUser){
        if (err) {
            console.log(err)
        }   else {
            if (foundUser){
                if (foundUser.password === password) {
                    res.render('success');
                }
            }
        }
   })
}

module.exports = { showLogin, findUser };