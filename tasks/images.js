/* assets */ 

const gulp = require('gulp');
const newer = require('gulp-newer');
const gulpIf = require('gulp-if');
const image = require('gulp-image');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => (
	gulp.src('app/assets/img/**/*.*')
	.pipe(newer('public/assets/img'))
	.pipe(gulpIf(!isDevelopment, image({
      mozjpeg: false,
      jpegoptim: false,
      jpegRecompress: true
    })))

	.pipe(gulp.dest('public/assets/img'))
)
