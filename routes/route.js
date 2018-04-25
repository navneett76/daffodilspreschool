const express = require("express");
const router = express.Router();

const users = require("../models/users");
const blogpostModel = require("../models/blogpost");

router.get("/contacts", (req, res, next)=>{
	users.find(function(err, contacts){
		res.json(contacts);
	})
});  

// Insert the record.
router.post("/createpost", (req, res, next)=>{
	
	let blogpost = new blogpostModel({
		title: req.body.title,
		description: req.body.description
	}); 

	blogpost.save()
    .then(item => {
      res.send("Record inserted successfully.");
    })
    .catch(err => {
      res.send("unable to save to database");
      // res.status(400).send("unable to save to database"+req);
    });
	
});

// get posts from the db
router.get("/listpost", (req, res, next)=>{
	blogpostModel.find({title: {$ne: null}},function(err, posts){
		res.json(posts);
	})
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