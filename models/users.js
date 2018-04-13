const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
	first_name: {
		type: String,
		require: true
	}
	
});

const contactDB = module.exports = mongoose.model("users", contactSchema);