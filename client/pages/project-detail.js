var JOB_DRAGGING = false;

Template.projectDetail.helpers({
  ui: function(project) {
    // Get todo by project id
    return TodoUI.find({pId: project._id}, {sort: {order: 1}});
  },
  lui: function(project) {
    // Get todo by project id
    return TodoLUI.find({pId: project._id}, {sort: {order: 1}});
  },
  uli: function(project) {
    return TodoULI.find({pId: project._id}, {sort: {order: 1}});
  },
  nui: function(project) {
    return TodoNUI.find({pId: project._id}, {sort: {order: 1}});
  }
});

Template.projectDetail.events({
  'dblclick .matrix': function() {
    bootbox.alert("Hello world!", function() {
      
    });
  }
});

Template.projectDetail.onRendered(function(){
  $('#sortable').sortable();
});
