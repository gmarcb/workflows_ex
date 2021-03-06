var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'), 
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'componets/scripts/rclick.js',
	'componets/scripts/pixgrid.js',
	'componets/scripts/tagline.js',
	'componets/scripts/template.js',
	];

var sassSources = ['componets/sass/style.scss'];	

gulp.task('coffee', function() {
	gulp.src('components/coffee/tagline.coffee')
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
}); 

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded',
		})
		.on('error', gutil.log),
		.pipe(gulp.dest('builds/development/css'),
});

gulp.task('watch', function()) {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSource,['js']);
});		

gulp.task('all', ['default', 'js', 'compass']);




