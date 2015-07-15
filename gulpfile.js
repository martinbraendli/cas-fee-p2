var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// sass function: style sass
gulp.task('sass', function(){
    // read all scss files
    gulp.src('scss/*.scss')
        // load sass
        .pipe(sass())
        // prevent gulp from crashing due tu scss files
        .on('error', function (error){
            console.error("there was an scss syntax error -hey check your scss-file");
            this.emit('end');
        })

        // extend autoprefixer for the last 3 browser versions
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 9"))
        // pipe it to css folder
        .pipe(gulp.dest('Server/public/css/'));
    console.log('new css written');
});

gulp.task('default', []);