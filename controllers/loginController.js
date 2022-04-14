const userModel = require("../models/userModel");  //it's important to require model when getting or posting thing to db!!
const moviesModel = require("../models/moviesModel");

const showLogin = function (req, res) {
    res.render('login');
}

const findUser = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //METHOD WITHOUT PASSPORT
    userModel.findOne({username: username}, function (err, foundUser){
        if (err) {    
            /* res.render('login-wrong'); */
            console.log(err)
        }   else {
            if (foundUser){
                if (foundUser.password === password) {
                        moviesModel.find({})
                        .then(data => {
                          res.render('user-index', {movies: data});
                        })
                        .catch((err)=>{           
                        /*   res.render('login-wrong'); */
                          console.log(err);
                        })
                }
            }
        }
   })
}

module.exports = { showLogin, findUser };