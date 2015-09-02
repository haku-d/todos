Meteor.startup(function(){
	if(Projects.find().count() === 0) {
		var sampleProjects = [
			{
				name: 'SGX',
				checked: false
			},
			{
				name: 'TSC',
				checked: false
			},
			{
				name: 'TLT',
				checked: false
			}
		];

		_.each(sampleProjects, function(project){
			Projects.insert(project, function(err, _id){
				console.log(err);
				// Create sample todo
				if(!err) {
					Todos.update({pId: _id}, {
						$set: {
							ui: [
								"Design home page wireframe",
								"Research leaflet.js"
							]
						}
					}, {
						upsert: true
					});
				}
			});
		});
	}
});