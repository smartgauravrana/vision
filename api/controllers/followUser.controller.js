const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.followUser = (req, res) => {

	if (req.body.user1 && req.body.user2) {

		User
			.findOne({'username': req.body.user1}, )
			.select('following')
			.exec((err, followingArr) => {

				if (err) {

					console.log(err);
				}

				else if (!followingArr) {

					res.json({success: false, message: 'User not found'});
				}

				else {

					followingArr.find({'username': req.body.user2}, (err, data) => {
						
						if (err) {
							console.log(err);
						}

						console.log('data', data);
						res.json({data: data});
					})
				}
			})
	}

	else {
		res.json({success: false, message: 'username not provided'});
	}
}