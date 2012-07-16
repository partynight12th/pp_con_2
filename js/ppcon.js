$(function(){
	console.info($().jquery);
	var ppcon = {};

	var hash = location.hash;

	ppcon.c$ = $("#contents");
	ppcon.navs$ = $("nav ul li");

	ppcon.contentsswap = function(page){
		console.log(page);

		page = page.replace(/\#_/,"");

		var target = $("." + page);
		if(target.length > 0){
			ppcon.c$.find("div").addClass("hidden");
			ppcon.c$.find("." + page).removeClass("hidden");
			ppcon.c$.slideDown("fast");
		}

		var navtarget =$("#" + page);
		if(navtarget.length > 0){
			ppcon.navs$.removeClass("current");
			navtarget.addClass("current");
		}
	}

	ppcon.contentsswap(hash);

	ppcon.navs$.each(function(){
		var t = $(this);
		t.on("click", function(){
			var page = t.attr("id");

			ppcon.c$.slideUp("fast", function(){ppcon.contentsswap(page)});
			
			location.hash = "#_" + page;
		});
	});
});
