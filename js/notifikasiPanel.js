$(function(){setTimeout(function()
	{
		return $(".bar").animate({height:"toggle"},"slow")},450);
return $("#btn").on("click",function(){$("#barwrap").css("margin-bottom","0px");
	$(".bar").animate({height:"toggle"},"slow");
	return!1})});