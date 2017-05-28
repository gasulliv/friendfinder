var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//takes whatever port defined by the site
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//including route files in server

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//function that tells us that the app is listening on the port that we defined
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});

