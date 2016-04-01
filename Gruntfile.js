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
                        src: ['app/**', '!app/**/*.js'],
                        dest: 'dist'
                    }
                ]
            }
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '**/*.js',
                    dest: 'dist/app/'
                }]
            }
        },

        cssmin: {
            options: {
                expand: true,
                shorthandCompacting: false,
                sourceMap: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "dist/assets/css/style.min.css": "assets/css/style.css"
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