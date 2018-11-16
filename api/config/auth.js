if(process.env.NODE_ENV === 'production') {
	console.log('hello prod');
	module.exports = require('./prod');
} else {
	console.log('hello');
	module.exports = require('./dev');
}
