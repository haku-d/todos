Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',
});

Router.route('projectDetail', {
  path: '/p/:_id',
  data: function() {
    return Projects.findOne(this.params._id);
  },
  action: function() {
    // Render template with name projectDetail
    this.render();
  }
});

Router.route('/', function () {
  this.render();
});