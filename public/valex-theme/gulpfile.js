var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create();
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify'); 


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('html/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('html/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark', function(){
   return gulp.src('html/assets/css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css'));
		
});


//_______task for leftmenu
gulp.task('menu', function(){
   return gulp.src('html/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css'));
		
});

//_______task for skinmodes
gulp.task('skin', function(){
	return gulp.src('html/assets/css/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });
 
//_______task for boxed
gulp.task('boxed', function(){
	return gulp.src('html/assets/css/boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });

//_______task for dark-boxed
gulp.task('dark-boxed', function(){
	return gulp.src('html/assets/css/dark-boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });


//_______task for closed-menu
gulp.task('closed-menu', function(){
	return gulp.src('html/assets/css/closed-sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });
 
 //_______task for menu-text
gulp.task('menu-text', function(){
	return gulp.src('html/assets/css/sidemenu1.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });
 
  //_______task for toggle-menu
gulp.task('toggle-menu', function(){
	return gulp.src('html/assets/css/sidemenu-responsive-tabs.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css'));
		 
 });

//_______task for beautify
gulp.task('beautify', function() {
	return gulp.src('html/assets/css/**/*.css')
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(gulp.dest('html/assets/css'));
});

/*--- RTl Version ---*/

//_______ task for scss folder to css main style-rtl
gulp.task('watch-rtl', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('html/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('html/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark-rtl', function(){
   return gulp.src('html/assets/css-rtl/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css-rtl'));
		
});


//_______task for leftmenu
gulp.task('menu-rtl', function(){
   return gulp.src('html/assets/css-rtl/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css-rtl'));
		
});

//_______task for skinmodes
gulp.task('skin-rtl', function(){
	return gulp.src('html/assets/css-rtl/skin-modes.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });

//_______task for boxed
gulp.task('boxed-rtl', function(){
	return gulp.src('html/assets/css-rtl/boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });

//_______task for dark-boxed
gulp.task('dark-boxed-rtl', function(){
	return gulp.src('html/assets/css-rtl/dark-boxed.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });


//_______task for closed-menu
gulp.task('closed-menu-rtl', function(){
	return gulp.src('html/assets/css-rtl/closed-sidemenu.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });
 
 //_______task for menu-text
gulp.task('menu-text-rtl', function(){
	return gulp.src('html/assets/css-rtl/sidemenu1.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });
 
  //_______task for toggle-menu
gulp.task('toggle-menu-rtl', function(){
	return gulp.src('html/assets/css-rtl/sidemenu-responsive-tabs.scss')
		 .pipe(sourcemaps.init())
		 .pipe(sass())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('html/assets/css-rtl'));
		 
 });

//_______task for beautify
gulp.task('beautify-rtl', function() {
	return gulp.src('html/assets/css-rtl/**/*.css')
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(gulp.dest('html/assets/css-rtl'));
});


