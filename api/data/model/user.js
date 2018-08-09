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
	}
});

module.exports = mongoose.model('User', userSchema);