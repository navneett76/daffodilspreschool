const express 	= require("express");
const router 	= express.Router();
var passport	= require("passport");
// require('../config/passport')(passport);
require('../config/passport/local-passport')(passport);

const multer 	= require('multer');

const users = require("../models/users");
const blogpostModel = require("../models/blogpost");
;

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

// router.post("/uploadImageFile", (req, res, next)=> {
// 	// add logic to upload image using mutler.
// 	return 1;
// });



var store 	= multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './public/uploads');
	},
	filename: function(req, file, cb){
		cb(null, Date.now()+"."+file.originalname);
	}
});

var upload = multer({storage:store}).single('file'); 
router.post('/uploadImageFile', function(req, res, next){
	upload(req,res,function(err){
        console.log(req.file);
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});


module.exports = router;