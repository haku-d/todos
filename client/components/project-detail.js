Template.projectDetail.helpers({
  todos: function(project) {
    // Get todo by project id
    return Todos.findOne({pId: project._id});
  }
});

Template.projectDetail.events({
  'dblclick .matrix': function() {
    bootbox.alert("Hello world!", function() {
      
    });
  }
});