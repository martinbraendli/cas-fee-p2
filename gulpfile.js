var gulp = require('gulp');
var concat = require('gulp-concat');
var deleteLines = require('gulp-delete-lines');
var sass = require('gulp-sass');
var webserver = require('gulp-server-livereload');
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
gulp.task('compileTypescript_server', function () {
    // server code without uglify
    var tsResult = gulp.src(
        ['!Server/public/**/*.ts', // without client code
            'Server/**/*.ts']) // all server code
        .pipe(ts({
            outDir: 'output'
        }));
    return tsResult.js.pipe(gulp.dest('build'));
});
gulp.task('compileTypescript_client_compile', function () {
    var tsResult = gulp.src(['Server/public/js/**/*.ts'])
        .pipe(ts({
            removeComments: true
        }));
    return tsResult.js.pipe(gulp.dest('build_temp'));
});
gulp.task('compileTypescript_client',
    ['compileTypescript_client_compile'],
    function () {
        var tsResult = gulp.src([
                'build_temp/constants.js',
                'build_temp/injects.js',
                'build_temp/app-module.js',
                'build_temp/app-routes.js',
                'build_temp/**/*.js'
            ])
            .pipe(concat('fettybossy.js'))
            .pipe(deleteLines({
                'filters': ['\/\/\/.*']
            }));
        return tsResult.pipe(gulp.dest('build/public/js'));
    });

/**
 * Copy all files to build
 */
gulp.task('copyToBuild', function () {
    gulp.src(['Server/**/*.json',
            'Server/**/*.css',
            'Server/**/*.jpg',
            'Server/**/*.html'])
        .pipe(gulp.dest('build'));

    // copy foreign libs
    gulp.src(['Server/public/js/lib/*.js'])
        .pipe(gulp.dest('build/public/js/lib'));

    console.log('files have been copied to build directory');
});

// gulp task web serve and live reload
gulp.task('serve', function () {
    gulp.src('Server/public')
        .pipe(webserver({
                port: '3001',
                livereload: true,
                //fallback: 'index.html',
                open: true
            })
        );
    console.log('webserver reloaded - have a look');
});


// gulp task-watcher function - sass, copytobuild
gulp.task('watch', function () {
        gulp.watch('scss/*.scss', ['sass']);
        gulp.watch('Server/**/*.html', ['copyToBuild']);
    }
    //console.log('watcher done');
);


//  Default Task: watcher activate
gulp.task('default', ['watch', 'serve']);

// watch scss and buildprocess
gulp.task('fbwatchbuild', ['watch', 'copyToBuild'], function () {
});


gulp.task('build', ['sass', 'compileTypescript_server', 'compileTypescript_client', 'copyToBuild']);
