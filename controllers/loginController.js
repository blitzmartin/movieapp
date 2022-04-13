const showLogin = function (req, res) {
    res.render('login');
    console.log("Utility msg: login routing working!")
}

module.exports = { showLogin };