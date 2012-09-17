$.APP = function(){
	return {
		navigationJump: function(ev){
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top-90
			}, 1000, function(){
				location.hash = '#/'+target.split('#')[1];
			});
		}
	}
}();
			
$(document).ready(function () {

	if ($("article.portfolio").length !== 0) {
		$("a.thumb").fancybox({});
	}

	$('a.nav[href*=#]').bind("click", $.APP.navigationJump)

});