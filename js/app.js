$(document).ready(function() {
	$(".filter").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		$(".filter-value").hide();
		$("div[data-filter-value*=" + filter + "]").show();
	})
})	

$(document).ready(function() {
	$(".filter-about").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		$(".filter-value-about").hide();
		$("article[data-filter-value*=" + filter + "]").show();
	})
})	