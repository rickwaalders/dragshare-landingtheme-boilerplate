$(function() {

	$("#shared-content img").click(function(event)
	{
		event.preventDefault();

		if ($("body").hasClass("zoomed"))
		{
			$("body").removeClass("zoomed");
		}
		else
		{
			$("body").addClass("zoomed");
		}
	});

});