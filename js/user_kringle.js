//get an instance of mongoose and mongoose schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// set up our user model
module.exports = mongoose.model("UserKringle", new Schema({
	user: String,
	kringle: String,
	userToGive: String,
	wishlist: String
}));