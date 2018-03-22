/* assets */ 

const gulp = require('gulp');
const newer = require('gulp-newer');


module.exports = () => (
	gulp.src('app/assets/fonts/**/*.*')
	.pipe(newer('public/assets/fonts'))
	.pipe(gulp.dest('public/assets/fonts'))
)
