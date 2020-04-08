var passport = require("passport");

// to set a specific way to use passport to authenticate users
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
	{
		// which field is being used for the username?
		username: "username"
	},
	function(username, password, done){
		// this function tells passport to check their system to see if that username/password combo exists and is correct

        db.User.findOne({
			where: {
				// this should match column used for username
				username: username
			}
		}).then(function(user){
			// there is no user that matches in the database, so return error
			if (!user) {
                console.log("no user");
				return done(null, false, {message: "Incorrect username or password"});

			}
			// use the validPassword function we created to check if the password is wrong
			else if (!user.validPassword(password)) {
                console.log("wrong pw");
				return done(null, false, {message: "Incorrect username or password"});
			}
			return done(null, user);
			// from here passport builds
		});
	}
));

// serializes the user, so when it is sent over to the client they have a record of the user stored in cookies
passport.serializeUser(function(user, cb){
	cb(null, user);
});

passport.deserializeUser(function(obj, cb){
	cb(null, obj);
});

module.exports = passport;
