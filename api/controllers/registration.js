const facebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')
const config = require('../config/auth');
const User = require('../data/model/user');

passport.use(new facebookStrategy({
	clientID: config.facebookAuth.clientId,
	clientSecret: config.facebookAuth.clientSecret,
	callbackURL: config.facebookAuth.callbackUrl
}, (accessToken, refreshToken, profile, done) => {
	console.log(profile);
	User.findOne({'facebook.id': profile.id}, (err, user) => {
		if(err)
			return done(err);
		if(user)
			return done(null, user);
		else {
			var newUser = new User();
			newUser.facebook.id = profile.id;
			newUser.facebook.token = accessToken;
			newUser.facebook.name = profile.displayName;
			if (profile.emails) {
				newUser.facebook.email = profile.emails[0].value;
			}

			newUser.save(function(err){
				if(err)
					return done(err);
				return done(null, newUser);
			});
		}
	})
}))