$(document).ready(function(){
	$('.project-heading').click(function(){
		$(this).next().toggle();
	});

	$(".nav li a").click(function(){
        $(".jumbotron").hide();
        var myDiv = $(this).attr("href");
        $(myDiv).show();
    });
});