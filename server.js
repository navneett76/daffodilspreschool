// code here
// https://www.youtube.com/watch?annotation_id=annotation_3753665107&feature=iv&list=PL9ooVrP1hQOHDHAMA5egjL5MrbnNIuJqZ&src_vid=wtIvu085uU0&v=uk2gSHbnhAI
// https://www.youtube.com/watch?v=wtIvu085uU0
// https://www.youtube.com/watch?v=wtIvu085uU0
var express 	= require('express');
var mongoose 	= require("mongoose");
var bodyParser  = require('body-parser');
var cors 		= require("cors");
var path 		= require("path");
var passport	= require("passport");
var logger 		= require('morgan');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy;
var passportauth= require("passport-jwt");

// require('./config/passport/jwt-passport')(passport);
// require('./config/passport/local-passport')(passport);
// require('./config/passport/oauth-passport')(passport);

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
// app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

// app.use(express());
app.use('/api', route);
app.use(express.static(__dirname + "/public"));


// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

app.listen('3000');
console.log("server running in port 3000");