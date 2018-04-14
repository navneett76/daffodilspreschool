const mongoose = require("mongoose");

const blogpostSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	}
	
});

const blogpostCollection = module.exports = mongoose.model("blogpost", blogpostSchema);