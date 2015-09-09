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
				// Create sample todo
				if(!err) {
					TodoUI.insert({
						pId: _id,
						name: "Design home page wireframe",
						type: 'ui',
						order: 1
					});

					TodoLUI.insert({
						pId: _id,
						name: "Research leaflet.js",
						type: 'lui',
						order: 2
					});
				}
			});
		});
	}
});