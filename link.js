$(function(){

	$("ul li").click(function()
	{
		var id = $(this).attr("id");
		chrome.tabs.getSelected(null, function(tab)
			{
				link = tab.url;
				title = tab.title;
				if (id == "ilyasbat") window.open("https://www.ilyasbat.com.tr/");

}
		);
	});

});
