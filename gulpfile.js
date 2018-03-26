const gulp		= require('gulp');
const browser	= require('browser-sync').create();

const uglify	= require('gulp-uglify-es').default;
const babel		= require('gulp-babel');


gulp.task('build', function() {
	return gulp.src('./src/Lifx.js')
		.pipe( babel() )
		.pipe( uglify() )
		.pipe( gulp.dest('./dist') );
});

gulp.task('default', ['build'], function() {
	browser.init({
		server: {
			baseDir: './example'
		},
		serveStatic: [{
			route: '/assets',
			dir: 'dist'
		}]
	});
});

gulp.task('watch', ['default'], function() {
	gulp.watch([
		'./src/Lifx.js',
		'./example/index.html'
	], ['build']).on('change', browser.reload);
});



