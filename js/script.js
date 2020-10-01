/* ON LOAD */
$(document).ready(function() {
	/* show/hide mobile menu */
	$(".navbar-top-mobile-toggle").click( function() {
		$(".navbar-menu-item").toggle();
	});

	/* show/hide modals */
	$("#modal-btn0").click( function() {
		$("#modal0").show();
	})
	$("#modal-btn1").click( function() {
		$("#modal1").show();
	})
	$("#modal-btn2").click( function() {
		$("#modal2").show();
	})
	$("#modal-btn3").click( function() {
		$("#modal3").show();
	})
	$("#modal-btn4").click( function() {
		$("#modal4").show();
	})

	$(".close-modal0").click( function() {
		$("#modal0").hide();
	})
	$(".close-modal1").click( function() {
		$("#modal1").hide();
	})
	$(".close-modal2").click( function() {
		$("#modal2").hide();
	})
	$(".close-modal3").click( function() {
		$("#modal3").hide();
	})
	$(".close-modal4").click( function() {
		$("#modal4").hide();
	})


});

/* ON WINDOW RESIZING */
$(window).on('resize', function() {
	/* show nav menu when width >= 960 */
	let width = $(window).width();
	if(width >= 960){
		$(".navbar-menu-item").show();
	}else{
		$(".navbar-menu-item").hide();
	}
});
