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
                livereload: 8081
            },
            styles : {
                files  : ['assets/**/*.less'],
                tasks  : ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        copy : {
            dist : {
                files : [
                    {
                        src: ['index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                files: {
                    "dist/assets/css/style.css": "assets/css/style.css"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less']);

    grunt.registerTask('build', ['less', 'copy', 'cssmin']);
