$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 3000
	});

	var options = {
  strings: ["Software Engineer. ^2000", "Student. ^2000", "Web Developer. ^2000"],
  typeSpeed: 50,
  loop : true,
  showCursor: false,
  startDelay: 1000
}

	var typed = new Typed(".sub", options);
})


$(".items").isotope({
		filter: '*',
		animationOptions:{
			duration:1500,
			easing: 'linear',
			queue: false
		}
	});


$("#filters a").click(function() {

	$("#filters .current").removeClass("current");
	$(this).addClass("current");

	var selector = $(this).attr("data-filter");

	$(".items").isotope({
		filter: selector,
		animationOptions:{
			duration:1500,
			easing: 'linear',
			queue: false
		}
	});
	return false;
});

const nav = $("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);
function stickyNavigation() {

	const body = $("body");

	if($(window).scrollTop() > 700){
		body.css("padding-top", nav.outerHeight() + "px");
		body.addClass("fixedNav");
	}
	else{
		body.css("padding-top", 0);
		body.removeClass("fixedNav");
	}
}



// const nav = $("#navigation");
// const navTop = nav.offset().top;

// $(window).on("scroll", stickyNavigation);

// function stickyNavigation() {
// 	var body = $("body");

// 	if($(window).scrollTop >= navTop) {
// 		body.addClass("sticky");
// 		}
// 	else{
// 			body.removeClass("sticky");
// 		}
// 		}
