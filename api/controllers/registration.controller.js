const facebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require('passport')

if(process.env.NODE_ENV === 'production') {
	const config = require('../config/prod');
} else {
	const config = require('../config/auth');
}

const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new facebookStrategy({
	clientID: config.facebookAuth.clientId,
	clientSecret: config.facebookAuth.clientSecret,
	callbackURL: config.facebookAuth.callbackURL,
	profileFields: ['id', 'emails', 'displayName', 'name', 'picture.type(large)']
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
			newUser.facebook.image = profile.photos[0].value;
			if (profile.emails) {
				newUser.facebook.email = profile.emails[0].value;
			}

			newUser.save(err => {
				if(err)
					return done(err);
				return done(null, newUser);
			});
		}
	})
}))


//Google Strategy
passport.use(new GoogleStrategy({
    clientID: config.googleAuth.clientId,
    clientSecret: config.googleAuth.clientSecret,
    callbackURL: config.googleAuth.callbackURL
  },
  (accessToken, refreshToken, profile, done) => {
	  console.log(profile);
	  User.findOne({'google.id': profile.id}, (err, user) => {
		if(err)
			return done(err);
		if(user)
			return done(null, user);
		else {
			var newUser = new User();
			newUser.google.id = profile.id;
			newUser.google.token = accessToken;
			newUser.google.name = profile.displayName;
			newUser.google.image = profile.photos[0].value;
			if (profile.emails) {
				newUser.google.email = profile.emails[0].value;
			}

			newUser.save(err => {
				if(err)
					return done(err);
				return done(null, newUser);
			});
		}
	})
  }
));