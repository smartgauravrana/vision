const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.searchPeople = (req, res) => {
	if (req.body.name) {
		User.find(
			{
				$or: [
						{'facebook.name': {$regex : "^" + req.body.name}}, 
						{'google.name': {$regex : "^" + req.body.name}}, 
						{'username': {$regex : "^" + req.body.name}}
					]
			},

			(err, docs) => {

				if (err) {
					console.log(err);
				}

				else if (docs.length == 0) {
					res.json({success: false, message: 'No user found'});
				}

				else {
					res.json({success: true, message: 'Users found', data: docs});
				}
			}
		);
	}
	else {
		res.json({success: false, message: 'Name not provided'});
	}
}