var projects = document.getElementById("projects");

	projects.addEventListener("mouseenter",function()
	{	
		$(".projectLink").each(function() {
			$(this).fadeIn(1200);
		});
  	});

	projects.addEventListener("mouseleave",function()
	{
		$(".projectLink").each(function() {
			$(this).fadeOut(400);
		});
	});

