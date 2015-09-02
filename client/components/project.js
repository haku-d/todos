Template.project.events({
	'click a': function(event) {
		// Toggle other menu item
		$(event.currentTarget).parent().siblings().removeClass('active');
		$(event.currentTarget).parent().addClass('active');
	}
});

Template.project.helpers({
  activeListClass: function() {
    var current = Router.current();
    if (current.route.getName() === 'projectDetail' && current.params._id === this._id) {
      return 'active';
    }
  }
});