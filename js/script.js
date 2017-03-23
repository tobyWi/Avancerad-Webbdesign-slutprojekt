	
(function($){
		
	var _window = $(window);
	var _header = $(".fixed");
	var _headerTop = _header.offset().top;
	var stickyNav = function(){
		var _scroll = _window.scrollTop();
		if ( _scroll > _headerTop ) {
			_header.addClass("fixedhead");
			$('main').addClass("mtop100");
		}
		else {
			_header.removeClass("fixedhead");
			$('main').removeClass("mtop100");
		}
	};

	stickyNav();

	$(window).scroll(function(){
		stickyNav();

	});



	$(".fa-bars").click(function(){
		$(".sidemenu").css('width', '250px');
		$(".opacity").show();
		$(this).hide();

	});

	$("section").click(function(){
		$(".sidemenu").css('width', '0px');
		$(".fa-bars").show();
	});


	$(".fa-times, .opacity").click(function(){
		$(".sidemenu").css('width', '0px');
		$(".fa-bars").show();
		$(".opacity").hide();

	});


})(jQuery);