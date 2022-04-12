const showHomepage = function (req, res) {
    res.render('index');
    console.log("Utility msg: homepage routing working!")
}

module.exports = {showHomepage};