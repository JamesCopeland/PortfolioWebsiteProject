////////// IMPORTS //////////
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

////////// PREP //////////
mongoose.connect("mongodb://localhost/portfolio");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

////////// SCHEMA SETUP //////////
var projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    link: String
});

var Project = mongoose.model("Project", projectSchema);


////////// GET REQUESTS //////////

// constructing root path
app.get("/", function(req, res) {
	res.render("home");
});

app.get("/Projects_James", function(req, res) {
	// Get projects from DB
	Project.find({}, function(err, projects){
		if(err) {
			console.log(err);
		} else {
			res.render("JamesPortfolio", {projects: projects});
		}
	});
});

app.get("/Info_James", function(req, res) {
	res.render("InfoPage_James");
});

app.get("/Projects_James/new", function(req, res) {
	res.render("JamesAdmin");
});

app.get("/Projects_James/:projectName", function(req,res) {
	var projectName = ("Projects_James/" + req.params.projectName);
	res.render(projectName);

});
app.get("*", function(req, res) {
	res.send("page not found");
});


////////// POST REQUESTS //////////


app.post("/",function(req,res) {
	res.redirect("/");
});

app.post("/ProjectShowcase", function(req, res) {
	res.render("/ProjectShowcase");
});

app.post("/Info_James",function(req,res) {
	res.redirect("/InfoPage_James");
});


app.post("/Projects_James/new", function(req, res) {
	res.redirect("/Projects_James");
});


// Tell Express to listen for requests on port 3000 (start server)
app.listen(3000, function() {
	console.log("Server has started...");
});




