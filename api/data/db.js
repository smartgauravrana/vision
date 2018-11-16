var mongoose = require('mongoose');
var dburl = 'mongodb+srv://gaurav:vodafone8053@vision-cluster-kx0tf.mongodb.net/test?retryWrites=true';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){

	console.log('mongoose connected to ' + dburl);

});

mongoose.connection.on('disconnected', function(){

	console.log('mongoose disconnected');

});

mongoose.connection.on('error', function(err){

	console.log('mongoose connection error' + err);

});

process.once('SIGUSR2', function(){

	mongoose.connection.close(function(){

		console.log('mongoose disconnected through app termination');
		process.kill(process.pid, 'SIGUSR2');
	});
});