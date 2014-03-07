
$(function(){
	Parse.initialize("t899K0oegoIaqBofzoUptQ5RKNwvC27ouCYQS2f4", "P2Nux1Ndq7wKVkAKazHnW2WZlQoQVLETVvDUbu3S");


window.band = new BandCollection;
band.fetch()

$('.sign-in').click(function(){

	var bandname = new Band();

		bandname.save({
			name: $('.name-input').val(),
		
		})

		// clearing out value after entered

		$('name-input').val('');


});

});

