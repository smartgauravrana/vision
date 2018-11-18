const express = require('express');
const router = express.Router();
const passport = require('passport');
const username = require('../controllers/username.controller');
const search = require('../controllers/search.controller');
const ctrlPosts = require('../controllers/posts.controller');
const ctrlComments = require('../controllers/comments.controller');
const ctrlLikes = require('../controllers/likes.controller');
const follow = require('../controllers/followUser.controller');

//facebook oauth routes

router
	.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router
	.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { 
											successRedirect: 'http://localhost:3000/username', 
											failureRedirect: '/authenticate',
											session: true 
										}));

//google oauth routes
router
	.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router
	.get('/auth/google/callback', 
		passport.authenticate('google', { 
											successRedirect: 'http://localhost:3000/username', 
											failureRedirect: '/authenticate',
											session: true 
										}));

router
	.get('/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
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

//comment likes routes
router
	.route('/posts/:postId/comments/:commentId/likes')
	.get(ctrlLikes.likesGetAll)
	.post(ctrlLikes.likesToggle)

router
	.route('/findusername')
	.post(username.findUsername);


router
	.route('/updateusername')
	.post(username.updateUsername);

router
	.route('/searchpeople')
	.post(search.searchPeople);

router
	.route('/follow')
	.post(follow.followUser);

//test routes
router
	.route('/users/:userId')
	.get(username.getUserDetails);

module.exports = router;