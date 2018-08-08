const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

module.exports = mongoose.model('User', userSchema);