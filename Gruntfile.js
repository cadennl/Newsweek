module.exports = function(grunt)
{
	//Project config
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	
	connect:
	{
		server:
		{
			options:
			{
				open:
				{
					target: 'http://localhost:8000',
					appName: 'Google Chrome'
				}
			}
		}
	},

	sass:
	{

			options:
			{
				sourceMap: true
			}, //options

		build:
			{

			files:
			{
				'assets/build/styles/style.css': 'scss/style.scss'
			} //files

			} //build
	}, //sass

	jshint:
	{
		all: ['Gruntfile.js','assets/build/js/*.js']
	}, //jshint

	watch:
		{
			html:
			{
				files: ['*.html']
			},

			css:
			{
				files: ['scss/*.scss'],
				tasks: ['compile-scss']
			}, //css

			javascript:
			{
				files: ['js/*.js'],
				tasks: ['compile-js']
			},

			options:
			{
				livereload: true,
				spawn: false
			}
			//javascript

			} //watch

	});

	

	grunt.registerTask('server', ["connect"]);
	grunt.registerTask('compile-scss',["sass"]);
	grunt.registerTask('compile-js', ["jshint"]);
	grunt.registerTask('default', ['connect', 'watch', 'open']);

};