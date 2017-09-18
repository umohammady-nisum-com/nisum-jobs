//Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema 

var listingSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	title: String,
	description: String,
	qualifications: String,
	company: String,
	salary: Number,
	jobType: String,
	apply: String,
	dates: String,
	location: String

});

module.exports = restful.model('Listings', listingSchema);