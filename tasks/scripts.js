/* js */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const named = require('vinyl-named');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const happyPack = require('happypack');


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

let plugins = [
	new happyPack({
			loaders: ['babel?presets[]=es2015'],
			threads: 4,
			verbose: false,
			cache: true
		}),
	new webpack.NoErrorsPlugin()
];

if (!isDevelopment) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false
			},
			output: {
				comments: false
			}
		})
	);
}

let options = {
	devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'happypack/loader',
			exclude: /node_modules/
		}, {
			test: require.resolve('jquery'),
			loader: 'expose-loader?$!expose-loader?jQuery'
		}]
	},
	plugins: plugins
};

module.exports = () => (

	gulp.src('app/scripts/*.js')
	.pipe(plumber({
		errorHandler: notify.onError(function(err) {
			return {
				title: 'Webpack',
				message: err.message		
			}
		})
	}))
	.pipe(gulpIf(isDevelopment, sourcemaps.init()))
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(named())
	.pipe(webpackStream(options))
	.pipe(rename('main.min.js'))
	.pipe(gulpIf(isDevelopment, sourcemaps.write()))
	.pipe(gulp.dest('public/scripts'))
);