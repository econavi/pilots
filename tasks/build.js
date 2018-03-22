/* build */

const gulp = require('gulp');


module.exports = gulp.series(
	'clean',
	'iconsSvg',
	'iconsPng',
	gulp.parallel(
		'html',
		'styles',
		'scripts',
		
		'fonts',
		'images',
		'misc'
	)
);