/* styles */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const stylint = require('gulp-stylint');
const stylus = require('gulp-stylus');
const rupture = require('rupture');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso'); // Minify CSS
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = () => (
	gulp.src('app/styles/*.styl')
	.pipe(plumber({
		errorHandler: notify.onError(function(err) {
			return {
				title: 'Styles',
				message: err.message		
			}
		})
	}))
	.pipe(stylint({
		config: '.stylintrc',
		reporter: 'stylint-stylish',
		reporterOptions: {verbose: true}
	}))
	.pipe(stylint.reporter())
	.pipe(stylint.reporter('fail', {failOnWarning: true}))
	.pipe(gulpIf(isDevelopment, sourcemaps.init()))
	.pipe(stylus({
		use: [
			rupture()
		],
		'include css': true
	}))
	.pipe(gcmq())
	.pipe(autoprefixer())
	.pipe(gulpIf(!isDevelopment, csso({
		restructure: false
	})))
	.pipe(gulpIf(isDevelopment, sourcemaps.write()))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest('public/styles'))
);