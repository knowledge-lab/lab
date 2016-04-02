module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					cleancss: false,
					optimization: 2,
					dumpLineNumbers: 'false'
				},
				files: {
					"assets/css/style.css": "assets/less/style.less"
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			styles: {
				files: ['assets/**/*.less', 'app/**/*.js'],
				tasks: ['less', 'uglify', 'cssmin'],
				options: {
					nospawn: true
				}
			}
		},

		copy: {
			dist: {
				files: [
					{
						expand: true,
						src: ['app/**', '!app/**/*.js', 'assets/font/**', 'assets/image/**'],
						dest: 'dist'
					},
					{
						src: 'lib/jquery/dist/jquery.min.js',
						dest: 'dist/lib/jquery/dist/jquery.js'
					},
					{
						src: 'lib/validate/validate.js',
						dest: 'dist/lib/validate/validate.js'
					},
					{
						cwd: 'lib/components-font-awesome',
						src: 'fonts/*',
						dest: 'dist/assets/',
						expand: true
					}
				]
			}
		},

		uglify: {
			dist: {
				files: [{
					expand: true,
					src: [
						'app/**/*.js',
						'lib/requirejs/*.js',
						'lib/CanJS/amd/**/*.js',
						'lib/requirejs-canjs-templates/stache.js',
						'lib/text/text.js'
					],
					dest: 'dist/'
				}]
			}
		},

		cssmin: {
			options: {
				expand: true,
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					"dist/assets/css/style.min.css": "assets/css/style.css"
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					expand: true
				},
				files: {
					'dist/index.html': 'index.html'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['less']);
	grunt.registerTask('build', ['less', 'copy', 'uglify', 'cssmin', 'htmlmin']);
};