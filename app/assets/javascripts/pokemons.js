// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready page:load', function() {
	$.ajax({
		url: '/pokemons',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			// data will be a JSON object representing a list of pokemon objects
			if ( data ) {
				var source = $('#pokemon-list-item').html();
				var template = Handlebars.compile(source);

				for ( var i = 0; i < data.length; i++ ) {
					var html = template(data[i]);
					$('.pokemon-list').append(html);
				}
			}
		}
	});

	// We need to use a delegated event handler here
	// because there are no links on the page a page-load time
	$('.pokemon-list').on('click', '.pokemon > a', function(e) {
		// This will only run if the element that was clicked
		// matches the selector in the second argument

		// `this` will be set to the DOM object for the element that was clicked.

		e.preventDefault();

		var self = $(this),
				url = self.attr('href');

		$.getJSON(url, function(data) {
			// `data` now holds the JSON data for the individual Pokemon I requested
			if ( data ) {
				var source = $('#pokemon-detail').html();
				var template = Handlebars.compile(source);
				var output = template(data);

				// Replace whatever was in #pokemon-detail-container with the populated template
				$('#pokemon-detail-container').html(output);
			}
		});
	});
});











