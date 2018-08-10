const express = require('express');
const router = express.Router();
const passport = require('passport');
const username = require('../controllers/username');
const search = require('../controllers/search');

const ctrlPosts = require('../controllers/posts.controller');

//facebook oauth routes
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

//post
router
	.route('/posts')
	.get(ctrlPosts.postsGetAll)
	.post(ctrlPosts.postsAddOne);	
	
router
	.route('/posts/:postId')
	.get(ctrlPosts.postsGetOne)
	.put(ctrlPosts.postsUpdateOne)
	.delete(ctrlPosts.postsDeleteOne);


router
	.route('/findusername')
	.post(username.findUsername);


router
	.route('/updateusername')
	.post(username.updateUsername);

router
	.route('/searchpeople')
	.post(search.searchPeople);

module.exports = router;