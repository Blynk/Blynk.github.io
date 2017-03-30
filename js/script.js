$(document).ready(function(){
	$('.project').css('cursor', 'pointer');
	$('.project-heading').append('<span class="span1" style="float:right;">&#9660;</span>')

	$('.project-heading').click(function(){
		if($(this).find('.span1').attr('id') == 'yes') {
            $(this).find('.span1').attr('id', '').html('&#9660;');
        } else {
            $(this).find('.span1').attr('id', 'yes').html('&#9650;');
        }
        $(this).next('.project-description').toggle();
	});
});
