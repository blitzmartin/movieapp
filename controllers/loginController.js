const showLogin = function (req, res) {
    res.render('login');
}

const findUser = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Login POST routing working!")

    //build function to find user
    /* if (user exists) {
        load index for user
    } else {
        load page saying cannot find user
    } */

}

module.exports = { showLogin, findUser };