const express = require('express');
const router = express.Router();
const passport = require('passport');

router
	.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router
	.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { 
											successRedirect: '/', 
											failureRedirect: '/authenticate',
											session: false 
										}));


module.exports = router;