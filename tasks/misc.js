/* misc */

const gulp = require('gulp');
const newer = require('gulp-newer');

module.exports = () => (
	gulp.src('app/assets/misc/{**/*,.*}')
	.pipe(newer('public'))
	.pipe(gulp.dest('public'))
);