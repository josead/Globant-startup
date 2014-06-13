function removeMsj($input){
	$input.children('li').eq(0).slideUp(500, function() {
		$input.children('li').eq(0).remove();
	});
	$('.alias').focus();
};

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
				var thl = $('.successmsj').html();
				document.getElementsByClassName('successmsj')[0].innerHTML = thl.replace($('.alias').val(),'<span class="highlight">'+$('.alias').val()+'</span>');
			})
			.fail(function() {
				removeMsj($('#listResponse'));
				$('#listResponse').append('<li class="content failmsj" style="color:red;">There\'s a problem with the url</li>');
			});
		} else {
			$('.alias').prop('placeholder','Hey!, complete me.');
		}
	});
	getTweets();
});

function getTweets() {
	$.getJSON( 'http://tweetproxy.ap01.aws.af.cm/search?callback=?',{ q: 'html5' }, function(data){
		console.log(data);
	  })
	  .done( function(data) {
	  	//todo url doesnt work anymore.
	  	$( '#listTweets' ).append('<div class"content tweet">'+
	  															'<img src="'+profile_image_url+'" class="small"> '+
	  															'<p>'+'Tweet from: '+ tweet.from_user+'</p>'+
	  															'<p>'+ tweet.text +'</p>'+
	  															'<p>'+ created_at +' - '+ tweet.from_user+'</p>'+
	  														'</div>')
	  });

}