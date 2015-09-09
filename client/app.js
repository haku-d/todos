/**
 * Main app body template helper
 */
Template.appBody.helpers({
  thisArray: function() {
    return [this];
  },
  // List of projects
  projects: function() {
    return Projects.find();
  }
});

Template.sortable.destroyed = function () {
  if(this.sortable) {
    this.sortable.destroy()
  }
};