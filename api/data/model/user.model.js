const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followingSchema = new Schema({
	username: String
});

const followerSchema = new Schema({
	username: String
});

const userSchema = new Schema({
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String,
		image: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String,
		image: String
	},
	username: String,
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	  }],
	following: [followingSchema],
	followers: [followerSchema]
});

mongoose.model('User', userSchema);