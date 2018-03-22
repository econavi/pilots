/* server */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();


module.exports = () => {
	browserSync.init({
		server: 'public',
		tunnel: false,
  		host: 'localhost',
  		port: 9000
	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload)
};