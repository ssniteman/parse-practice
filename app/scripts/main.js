
$(function(){
	Parse.initialize("t899K0oegoIaqBofzoUptQ5RKNwvC27ouCYQS2f4", "P2Nux1Ndq7wKVkAKazHnW2WZlQoQVLETVvDUbu3S");


window.bands = new BandCollection;
bands.fetch({

			// connecting main.js with view, and this function is looping over each
			// model in the collection and putting it into the RowView

			success: function(){
				bands.each(function(band){
					new RowView({model: band});
				})
			},

		});

$('.sign-up').click(function(){

	var bandname = new Band();

		bandname.save({
			name: $('.name-input').val(),
		
		})

		// clearing out value after entered

		$('name-input').val('');


});

});

