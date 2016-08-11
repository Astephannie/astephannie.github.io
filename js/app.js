$(document).ready(function() {
	$(".filter").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		$(".filter-value").hide();
		$("div[data-filter-value*=" + filter + "]").show();
	});
	
	$(".filter-about").click(function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		$(".filter-value-about").hide();
		$("article[data-filter-value*=" + filter + "]").show();
	});
	
	/* Smooth Scroll */
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
})	