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
      res.json("Record inserted successfully.");
    })
    .catch(err => {
      res.json("unable to save to database");
      // res.status(400).send("unable to save to database"+req);
    });
	
});

// Update the record.
router.post("/updatePost", (req, res, next)=>{

	blogpostModel.update({_id: req.body.uId}, {$set:{"title": req.body.title, "description": req.body.description }}, )
    .then(item => {
      res.json("Record updated successfully.");
    })
    .catch(err => {
      res.json("unable to save to database");
      // res.status(400).send("unable to save to database"+req);
    });
	
});

// get posts from the db
router.get("/listpost", (req, res, next)=>{
	blogpostModel.find({title: {$ne: null}},function(err, posts){
		res.json(posts);
	}).sort([['_id', -1]])
});  


// get posts from the db
router.get("/editPost/:id", (req, res, next)=>{
	blogpostModel.find({_id: req.params.id},  function(err, result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	})
});  

// delete the contact

router.delete("/deletePost/:id", (req, res, next)=>{
	// console.log("sdfsdfsd");
	blogpostModel.remove({_id: req.params.id},  function(err, result){
		if(err){
			res.json(err);
		}else{

			res.json('Record has been deleted.');
		}
	});
});


module.exports = router;