const showHomepage = function (req, res) {
    res.render('index');
    console.log("Utility msg: index routing working!")
}

module.exports = {showHomepage};