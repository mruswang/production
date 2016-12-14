var gulp=require('gulp');
var watch=require('gulp-watch');
var browserify=require('browserify');
var babelify=require('babelify');
var source=require('vinyl-source-stream');
gulp.task('build',function () {
    return browserify('./source/app.jsx')
    //.transform(babelify)
    //.transform(babelify,{presets:["react"]})
        .transform(babelify,{presets:["es2015","react"]})
        .bundle()
        .pipe(source('reactobj.js'))
        .pipe(gulp.dest('./public/'));
});

//Watch our Files
gulp.task('watch',function () {
    gulp.watch(['source/*jsx','source/**/*jsx'],['build']);
});
gulp.task('default',['watch','build']);