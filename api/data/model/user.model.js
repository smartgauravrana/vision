const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
	following: [String],
	followers: [String]
});

mongoose.model('User', userSchema);