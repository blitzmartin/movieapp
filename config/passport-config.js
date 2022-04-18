const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {

  const customFields = {
    usernameField: "username",
    passwordField: "password",
  };


  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email) //function to get user from the array
    
    //instead of getUserByEmail call model const user = Users.find({email:email})

    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))

  //save user.id in our session
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id)) //instead of getUserById change for MongoDB
  })
}

module.exports = initialize