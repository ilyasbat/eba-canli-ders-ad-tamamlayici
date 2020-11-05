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
	$("#saveButton").click(()=>{
		let value = $("#textarea").val();
		chrome.storage.sync.set({ "ebaData": value }, function(){
			alert("Kayıt başarılı. Verilerin yüklenmesi için sayfanın yenilenmesi gerekli. Windows için F5, Mac için Command + R tuşlarına basabilirsiniz");
		});
	})
	chrome.storage.sync.get(["ebaData"], function(items){
		$("#textarea").val(items.ebaData);
	});
});
