$(function(){
	console.info($().jquery);
	var ppcon = {};

	var hash = location.hash;

	ppcon.c$ = $("#contents");
	ppcon.navs$ = $("nav ul li");

	ppcon.contentsswap = function(page){
		console.log(page);

		page = page.replace(/\#!/,"") || "about";

		var target = this.c$.find("." + page);
		if(target.length > 0){
			this.c$.find("div").addClass("hidden");
			target.removeClass("hidden");
			this.c$.slideDown("fast");
		}

		var navtarget =$("#" + page);
		if(navtarget.length > 0){
			this.navs$.removeClass("current");
			navtarget.addClass("current");
		}
	}

	ppcon.contentsswap(hash);

	ppcon.navs$.each(function(){
		var t = $(this);
		t.on("click", function(){
			var page = t.attr("id");

			ppcon.c$.slideUp("fast", function(){ppcon.contentsswap(page)});
			
			location.hash = "#!" + page;
		});
	});
});
