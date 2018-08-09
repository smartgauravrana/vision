const express = require('express');
const router = express.Router();
const passport = require('passport');
const username = require('../controllers/username');

//
router
	.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router
	.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { 
											successRedirect: '/', 
											failureRedirect: '/authenticate',
											session: false 
										}));

//google oauth routes
router
	.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router
	.get('/auth/google/callback', 
		passport.authenticate('google', { 
											successRedirect: '/', 
											failureRedirect: '/authenticate',
											session: false 
										}));

router
	.post('/findusername', username.findUsername);

router
	.post('/updateusername', username.updateUsername);

module.exports = router;