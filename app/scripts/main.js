
$(function(){
	Parse.initialize("t899K0oegoIaqBofzoUptQ5RKNwvC27ouCYQS2f4", "P2Nux1Ndq7wKVkAKazHnW2WZlQoQVLETVvDUbu3S");


window.band = new BandCollection;
band.fetch()

$('.sign-in').click(function(){

	var username = new Band();

		username.save({
			name: $('.name-input').val(),
		
		})


});

});

