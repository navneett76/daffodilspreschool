// code here
// https://www.youtube.com/watch?v=wtIvu085uU0
var express 	= require('express');
var mongoose 	= require("mongoose");
var bodyParser = require('body-parser');
var cors 		= require("cors");
var path 		= require("path");
var app 		= express();
const route 	= require("./routes/route");

// connect to mongo db
mongoose.connect('mongodb://localhost:27017/daffodils');

// on connection
mongoose.connection.on("connected", () => {
	console.log("Connected to mongodb@27017");
});

mongoose.connection.on("error", (err) => {
	if(err){
		console.log("connection error"+ err);
	}
	console.log("error Connected to mongodb@27017");
});

// app.get('/', function (req, res){
// 	res.send("Hello user from server.js file.")
// });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express());
app.use('/api', route);
app.use(express.static(__dirname + "/public"));


app.listen('3000');
console.log("server running in port 3000");