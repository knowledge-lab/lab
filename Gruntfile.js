module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress       : false,
                    cleancss       : false,
                    optimization   : 2,
                    dumpLineNumbers: 'false'
                },
                files  : {
                    "assets/css/style.css": "assets/less/style.less"
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            styles : {
                files  : ['assets/**/*.less', 'app/**/*.js'],
                tasks  : ['less', 'uglify', 'cssmin'],
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
                        src: ['assets/font/**', 'assets/image/**'],
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        src: ['app/**', '!app/**/*.js', 'assets/font', 'assets/image'],
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        src: ['index.html'],
                        dest: 'dist'
                    },
                    {
                        src : 'lib/jquery/dist/jquery.min.js',
                        dest: 'dist/lib/jquery/dist/jquery.js'
                    },
                    {
                        src : 'lib/validate/validate.js',
                        dest: 'dist/lib/validate/validate.js'
                    },
                    {
                        cwd: 'lib/components-font-awesome',
                        src: 'fonts/*',
                        dest: 'dist/assets/',
                        expand : true
                    }
                ]
            }
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    src: ['app/**/*.js', 'lib/requirejs/*.js', 'lib/CanJS/amd/**/*.js',
                        'lib/requirejs-canjs-templates/stache.js', 'lib/text/text.js'],
                    dest: 'dist/'
                }]
            }
        },

        cssmin: {
            options: {
                expand: true,
                shorthandCompacting: false,
                sourceMap: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "dist/assets/css/style.css": "assets/css/style.css"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['less']);
    grunt.registerTask('build', ['less', 'copy', 'uglify', 'cssmin']);
};