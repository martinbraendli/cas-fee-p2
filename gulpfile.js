var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');




/**
 * TSD Task "reinstall"
 */
gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

/**
 * Fetch needed client libs from node_modules into public part of application
 */
gulp.task('copyLibs', function () {
    gulp.src(['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'])
        .pipe(gulp.dest('Server/public/js/lib'));
});


/**
 * sass function: style sass
 */
gulp.task('sass', function () {
    // read all scss files
    gulp.src('scss/*.scss')
        // load sass
        .pipe(sass())
        // prevent gulp from crashing due tu scss files
        .on('error', function (error) {
            console.error("there was an scss syntax error -hey check your scss-file");
            this.emit('end');
        })
        // extend autoprefixer for the last 3 browser versions
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 9"))
        // pipe it to css folder
        .pipe(gulp.dest('Server/public/css/'));
    console.log('new css has been written');
});

/**
 * compile typescript
 */
gulp.task('compileTypescript', function () {
    var tsResult = gulp.src('Server/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outDir: 'output'
        }));
    tsResult.js.pipe(gulp.dest('build'));
});

/**
 * Copy all files to build
 */
gulp.task('copyToBuild', function () {
    gulp.src(['Server/**/*.js',
        'Server/**/*.json',
        'Server/**/*.css',
        'Server/**/*.jpg',
        'Server/**/*.html'])
        .pipe(gulp.dest('build')
    );
    console.log('files have been copied to build directory');
});



// gulp task-watcher function
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('Server/**/*.html', ['copyToBuild']);
    }
    //console.log('watcher done');
);


//  Default Task: watcher activate
gulp.task('default', ['watch']);

// watch scss and buildprocess
gulp.task('fbwatchbuild', ['watch','copyToBuild'], function(){});


gulp.task('build', ['sass', 'compileTypescript', 'copyToBuild']);
