var RowView = Parse.View.extend({

	className: 'bandname-div',

	createTemplate: _.template($('#marketing-template').text()),

	initialize: function() {

		console.log('initializing')

		$('.marketing').html()

		this.render()
	},

	render: function() {

		console.log('rendering')

		var renderedTemplate = this.createTemplate({model: this.model})

		this.$el.html(renderedTemplate)
	}

})
