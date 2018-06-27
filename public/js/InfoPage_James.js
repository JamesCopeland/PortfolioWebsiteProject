var projectShowcase = $(".projectShowcase");
var button = $(".btn-block");

button.on("click",function() { 
	projectShowcase.toggleClass("removed");
});

