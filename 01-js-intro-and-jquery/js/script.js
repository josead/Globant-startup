function removeMsj($input){
	$input.children('li').eq(0).slideUp(500, function() {
		$input.children('li').eq(0).remove();
	});
	$('.alias').focus();
};
function highlight(text)
{
	inputText = $('successmsj').innerHTML;
	var innerHTML = inputText.val();
	var index = innerHTML.indexOf(text);
	if ( index >= 0 )
	{ 
			innerHTML = innerHTML.substring(0,index) + '<span class="highlight">' + innerHTML.substring(index,index+text.length) + '</span>' + innerHTML.substring(index + text.length);
			inputText.innerHTML = innerHTML 
	}

}
//only when the page is loaded
$(document).ready(function() {
	// section fade in
	$('header').fadeIn(2000, function() {
		// set focus on alias input
		$('.alias').focus();
	});


	$('.reqButton').click(function() {

		if ($('.alias').val() != "") {
			var linkref = 'http://bootcamp.aws.af.cm/welcome/'+$('.alias').val();
			$.getJSON(linkref).done( function(data) {
				removeMsj($('#listResponse'));
				$('#listResponse').append('<li class="content successmsj">'+data.response+'</li>');
				highlight($('.alias').val());
			})
			.fail(function() {
				removeMsj($('#listResponse'));
				$('#listResponse').append('<li class="content failmsj" style="color:red;">There\'s a problem with the url</li>');
			});
		} else {
			$('.alias').prop('placeholder','Hey!, complete me.');
		}
	});
});

