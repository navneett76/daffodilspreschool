const express = require("express");
const router = express.Router();

const users = require("../models/users");

router.get("/contacts", (req, res, next)=>{
	users.find(function(err, contacts){
		res.json(contacts);
	})
});  

// Insert the record.
router.post("contact", (req, res, next)=>{
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		phone: req.body.phone
	}); 

	newContact.save((err, contact)=>{
		if(err){
			res.json({msg: "Fail to add contact"});
		}else{
			res.json({msg: "Contact add successfully."});
		}
	});
});

// delete the contact

router.delete("contact/:id", (req, res, next)=>{
	users.remove({_id: req.params.id}, function(err, result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	});
});


module.exports = router;