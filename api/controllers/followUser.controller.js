const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.followUser = (req, res) => {

	if (req.body.user1 && req.body.user2) {

		User.findOneAndUpdate({'username': req.body.user1}, {$push: {'following': req.body.user2}}, {new: true}, (err1, docs1) => {

			if (err1) {

				console.log(err1);
			}

			else {

				console.log('user1', docs1);
				User.findOneAndUpdate({'username': req.body.user2}, {$push: {'followers': req.body.user1}}, {new: true}, (err2, docs2) => {
					
					if (err2) {

						console.log(err2);
					}

					else {

						console.log('user2', docs2);
						res.json({success: true, message: req.body.user1 + " started following " + req.body.user2});
					}
				})
			}
		});
	}

	else {
		res.json({success: false, message: 'username not provided'});
	}
}