var gulp   = require('gulp');
var less   = require('gulp-less');
var cssmin = require('gulp-clean-css');
var uglify = require('gulp-uglify');

/*
* CSS TASK
*/
gulp.task('less', function () {
    return gulp.src('assets/less/style.less')        /* Watch main less file */
                .pipe(less())                        /* LESS preprocessor */
                .pipe(gulp.dest('assets/css'))       /* Push unminified CSS file into assets/css */
                .pipe(cssmin())                      /* Minify css */
                .pipe(gulp.dest('dist/assets/css')); /* Push minified CSS into dist folder */
});

gulp.task('scripts', function () {
    var scriptSources = [
        'app/**/*.js',
        'lib/requirejs/*.js',
        'lib/CanJS/amd/**/*.js',
        'lib/requirejs-canjs-templates/stache.js',
        'lib/text/text.js'
    ];

    return gulp.src(scriptSources)
                .pipe(uglify())
                .pipe(gulp.dest('dist/'));
});

/**
* WATCH TASK
*/
gulp.task('watch', function () {
    gulp.watch('assets/less/**/*.less', ['less']); /* When any file in /less folder is changed, call 'less' task */
});

/*
* BUILD TASK
*/
gulp.task('build', ['less', 'scripts']);

/*
* DEFAULT GULP TASK
*/
gulp.task('default', ['less', 'watch']);
