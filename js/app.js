$(document).ready(function() {
	$(".filter").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		$(".filter-value").hide();
		$("div[data-filter-value*=" + filter + "]").show();
	})
})	