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
                files  : ['assets/**/*.less'],
                tasks  : ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};