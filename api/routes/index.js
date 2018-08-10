const express = require('express');
const router = express.Router();
const passport = require('passport');
const username = require('../controllers/username');

const ctrlPosts = require('../controllers/posts.controller');
const ctrlComments = require('../controllers/comments.controller');

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

//post routes
router
	.route('/posts')
	.get(ctrlPosts.postsGetAll)
	.post(ctrlPosts.postsAddOne);	
	
router
	.route('/posts/:postId')
	.get(ctrlPosts.postsGetOne)
	.put(ctrlPosts.postsUpdateOne)
	.delete(ctrlPosts.postsDeleteOne);

//comment routes
router
	.route('/posts/:postId/comments')
	.get(ctrlComments.commentsGetAll)
	.post(ctrlComments.commentsAddOne);

router
	.route('/posts/:postId/comments/:commentId')
	.put(ctrlComments.commentsUpdateOne)
	.delete(ctrlComments.commentsDeleteOne);


router
	.route('/findusername')
	.post(username.findUsername);


router
	.route('/updateusername')
	.post(username.updateUsername);

module.exports = router;