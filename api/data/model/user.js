const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
	username: String
});

module.exports = mongoose.model('User', userSchema);