var data = {
	personal:	[
		{prop: 'Name',
	 	 desc: 'Jose Antonio Dominguez'},
		{prop: 'Age',
	 	 desc: '21'},
		{prop: 'Hobbys', 
		 desc: 'are music, drowing, etc.'},
		{prop: 'Job',
		 desc: ''}
	],
	education: [
		{prop: 'College',
		 desc: 'Unicen - Tandil'},
		{prop: 'Carrer',
		 desc: 'System Eningeering'},
		{prop: 'High School',
		 desc: 'Normal one'}
	],
	contact: [
		{prop: 'Phone Number',
		 desc: '01234090909'},
		{prop: 'Email', 
		 desc: 'chamot11@gmail.com'},
		{prop: 'URL',
		 desc: '<a href="http://dev.aoc.parrastudios.com/">Aoc.dev</a>'}
	]
}

Handlebars.registerHelper('list', function(items, options) {
	var out = '<ul>';
	for(var i=0, l=items.length; i<l;i++) {
		out = out + '<li>' + options.fn(items[i]) + '</li>';
	}
	return out + '</ul>';
})

var profiletemplate = $('#profileTpl').html();
var html = Handlebars.compile(profiletemplate);
$('#profile').html(html(data));


