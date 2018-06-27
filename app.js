var express = require("express");		// includes express
var app = express();					// saves express.js as an object

app.use(express.static("public"));
//app.set("view engine", "ejs"); // removes the need to show .ejs extension in render()

// constructing root path
app.get("/", function(req, res) {
	res.render("InfoPage_James.ejs")
});

app.get("*", function(req, res) {
	res.send("page not found")
});



// Tell Express to listen for requests on port 3000 (start server)
app.listen(3000, function() {
	console.log("Server has started...");
});