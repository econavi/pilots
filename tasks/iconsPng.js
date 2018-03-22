// sprite.icon.svg

const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith-multi');
const image = require('gulp-image');
const gulpIf = require('gulp-if');

const imgPath = '../assets/img/sprites/';


module.exports = () => (
	gulp.src('app/icons/png/**/*.png')

	.pipe(image({
      //optipng: true
      zopflipng: true
    }))
	
	.pipe(spritesmith({
		spritesmith: function (options) {
			
			options.imgPath = imgPath + options.imgName;
			options.retinaImgPath = imgPath + options.retinaImgName;
			options.algorithm = 'top-down';
	        options.padding = 8;
	        options.cssName = options.cssName.replace(/\.css$/, '.styl');
			options.cssTemplate = 'png-sprite-template';
			options.cssOpts = {
				functions: true, 
				variableNameTransforms: ''
			};
	    }
	})).on('error', function (err) {
      console.log(err)
    })

	.pipe(gulpIf('*.png', gulp.dest('public/assets/img/sprites'), gulp.dest('app/styles/sprites/')))
);