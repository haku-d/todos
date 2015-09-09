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
  },
  uiOptions: {
    sortField: 'order',
    group: {
      name: 'ui',
      pull: true,
      put: ['lui', 'uli', 'nui']
    },
    onAdd: function(event) {
      console.log('ui');
      TodoNUI.remove(event.data._id);
      TodoULI.remove(event.data._id);
      TodoLUI.remove(event.data._id);

      delete event.data._id;
      event.data.type = $(event.target).data('type');
    },
    onMove: function(event) {

    }
  },
  luiOptions: {
    sortField: 'order',
    group: {
      name: 'lui',
      pull: true,
      put: ['ui', 'uli', 'nui']
    },
    onAdd: function(event) {
      console.log('lui');
      TodoUI.remove(event.data._id);
      TodoULI.remove(event.data._id);
      TodoNUI.remove(event.data._id);

      delete event.data._id;
      event.data.type = $(event.target).data('type');
    },
    onMove: function(event) {
      
    }
  },
  uliOptions: {
    sortField: 'order',
    group: {
      name: 'uli',
      pull: true,
      put: ['ui', 'lui', 'nui']
    },
    onAdd: function(event) {
      TodoUI.remove(event.data._id);
      TodoLUI.remove(event.data._id);
      TodoNUI.remove(event.data._id);

      delete event.data._id;
      event.data.type = $(event.target).data('type');
    },
    onMove: function(event) {
      
    }
  },
  nuiOptions: {
    sortField: 'order',
    group: {
      name: 'nui',
      pull: true,
      put: ['ui', 'lui', 'uli']
    },
    onAdd: function(event) {
      TodoUI.remove(event.data._id);
      TodoULI.remove(event.data._id);
      TodoLUI.remove(event.data._id);

      delete event.data._id;
      event.data.type = $(event.target).data('type');
    },
    onMove: function(event) {
      
    }
  }
});

Template.projectDetail.events({
  'dblclick .matrix': function() {
    bootbox.alert("Hello world!", function() {
      
    });
  }
});