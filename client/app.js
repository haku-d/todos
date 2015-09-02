Template.appBody.helpers({
  
  thisArray: function() {
    return [this];
  },

  projects: function() {
    return Projects.find();
  }
  
});