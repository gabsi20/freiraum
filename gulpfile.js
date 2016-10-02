  ////////////
  // Settings
  var cmsAssetsPath = ''; // Path to CMS location of assets (if empty assets will not be copied anywhere). E.g. "htdocs/assets/web/"
  var useRubySass = false; // Use of Ruby-sass is slower but supports latest sass features
  var generateWebpImages = false; // Generate .webp images from your .jpgs and .pngs

  //////////
  // Plugins
  var gulp         = require('gulp'); // Gulp
  var uglify       = require('gulp-uglify'); // Plugin for uglifing javascript
  var libsass      = require('gulp-sass'); // Package to compile scss files with Lib Sass
  var rubysass     = require('gulp-ruby-sass'); // Package to compile scss files with Ruby Sass
  var path         = require('path'); // Plugin with path utils
  var cleanCSS     = require('gulp-clean-css'); // Plugin to minify css
  var rename       = require('gulp-rename'); // Plugin for renaming files
  var autoprefixer = require('gulp-autoprefixer'); // Plugin to vendor prefix css
  var include      = require('gulp-include'); // Plugin to include files into others
  var notify       = require("gulp-notify"); // Plugin to send notifications to the operating system
  var imagemin     = require("gulp-imagemin"); // Plugin for minifying jpg, png, gif and svg
  var livereload   = require('gulp-livereload'); // Plugin for enable lievreload for your browser
  var plugins      = require('gulp-load-plugins')();
  var sourcemaps   = require('gulp-sourcemaps'); // Plugin for enable lievreload for your browser
  var runSequence  = require('run-sequence'); // Plugin to run tasks in sequence
  var iconfont     = require('gulp-iconfont'); // Plugin to create icon fonts from svg images
  var iconfontCss  = require('gulp-iconfont-css'); // Plugin to generate css file with icon font definitions
  var filter       = require('gulp-filter');
  var svg2png      = require('gulp-svg2png'); // Plugin to generate png files from svgs for fallback serving
  var del          = require('del'); // Plugin to remove files or folders
  var gulpif       = require('gulp-if'); // Conditional logic
  var argv         = require('yargs').argv; // Plugin to read cmd arguments
  var cwebp         = require('gulp-webp'); // Plugin to generate .webp files from .jpg and .png

  /////////
  // Paths
  var assetsPath   = 'assets/web/'; // Path to assets
  var srcPath      = 'templates/src/'; // Path to the source files
  var distPath     = 'templates/dist/'; // Path to the distribution files

  //////////////////////
  // Icon font settings
  var iconFontName            = 'Project_icons';
  var iconFontTemplateFile    = '_icons.scss';
  var iconFontDefinitionsFile = '_iconfont.scss';
  var fontsDirectory          = 'fonts/iconfont';

  ///////////////////////////////
  // Paths that gulp should watch
  var watchPaths = {
    scripts:        [srcPath + assetsPath + 'js/*.js', srcPath + assetsPath + 'js/**/*.js'],
    vendorScripts:  [srcPath + assetsPath + 'js/vendor/*.js', srcPath + assetsPath + 'js/vendor/**/*.js'],
    images:         [srcPath + assetsPath + 'img/**'],
    iconfont:       [srcPath + assetsPath + 'iconfont/**'],
    sass:           [srcPath + assetsPath + 'sass/*.scss', srcPath + assetsPath + 'sass/**/*.scss'],
    fonts:          [srcPath + assetsPath + 'fonts/**'],
    html:           [srcPath +'**/*.html', srcPath +'**/*.php', !srcPath + assetsPath],
    svgpng:         [srcPath + assetsPath + 'img/**/*.svg'],
    other:          [srcPath + assetsPath + 'other/**/*']
  };

  var watchDistPaths = {
    scripts:        [distPath + assetsPath + 'js/*.js'],
    images:         [distPath + assetsPath + 'img/**'],
    css:            [distPath + assetsPath + 'css/*.css'],
    fonts:          [distPath + assetsPath + 'fonts/**'],
    other:          [distPath + assetsPath + 'other/**']
  };

  //Flags
  var cmsAssets;
  (cmsAssetsPath == '' ? cmsAssets = false : cmsAssets = true );


////////
// TASKS

if(!useRubySass){
  // Task for lib-sass files
  gulp.task('sass', function () {
   return gulp.src(srcPath + assetsPath + 'sass/*.scss')
   .pipe(libsass())
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/include task"
   }))
   .pipe(include())
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/include task"
   }))
   .pipe(autoprefixer({
     browsers:  ['> 1%', 'last 2 versions'],
     cascade:   false
   }))
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/autoprefixer task"
   }))
   .pipe(cleanCSS())
   .on("error", notify.onError({
     message:   "Error: CSS Min",
     title:     "Error running sass/cleanCSS task"
   }))
   .pipe(rename({
     suffix:  '.min'
   }))
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/suffix task"
   }))
   .pipe(gulp.dest(distPath + assetsPath + 'css'))
   .pipe(livereload());
 });
} else {
  // Task for ruby-sass files
  gulp.task('sass', function () {
   return rubysass(srcPath + assetsPath + 'sass/')
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/rubysass task"
   }))
   .pipe(include())
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/include task"
   }))
   .pipe(autoprefixer({
     browsers:  ['> 1%', 'last 2 versions'],
     cascade:   false
   }))
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/autoprefixer task"
   }))
   .pipe(cleanCSS())
   .on("error", notify.onError({
     message:   "Error: CSS Min",
     title:     "Error running sass/cleanCSS task"
   }))
   .pipe(rename({
     suffix:  '.min'
   }))
   .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running sass/suffix task"
   }))
   .pipe(gulp.dest(distPath + assetsPath + 'css'))
   .pipe(livereload());
 });
}


// Javscript task
gulp.task('scripts', function(){
  return gulp
  .src(srcPath + assetsPath + 'js/*.js')
  .pipe(include())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running scripts/include task"
 }))
  .pipe(sourcemaps.init())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running scripts/sourcemaps init task"
 }))
  .pipe(uglify())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running scripts/uglify task"
 }))
  .pipe(rename({
   suffix:  '.min'
 }))
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running scripts/suffix task"
 }))
  .pipe(gulpif(!argv.prod, sourcemaps.write('maps')))
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running scripts/sourcemaps write task"
 }))
  .pipe(gulp.dest(distPath + assetsPath + 'js'))
  .pipe(livereload());
});


// Javscript vendor task
gulp.task('vendorScripts', function(){
  return gulp
  .src(srcPath + assetsPath + 'js/vendor/*.js')
  .pipe(include())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running vendorScripts/include task"
 }))
  .pipe(uglify())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running vendorScripts/uglify task"
 }))
  .pipe(rename({
    suffix:   '.min'
  }))
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running vendorScripts/rename task"
 }))
  .pipe(gulp.dest(distPath + assetsPath + 'js'))
  .pipe(livereload());
});

// Font task
gulp.task('fonts', function () {
  return gulp
  .src([srcPath + assetsPath + 'fonts/**'])
  .pipe(gulp.dest(distPath + assetsPath + 'fonts'))
  .pipe(livereload());
});

// HTML task
gulp.task('html', function () {
  return gulp
  .src([srcPath + '**/*.html', srcPath + '**/*.php', '!' + srcPath + assetsPath + '**/*'])
  .pipe(include())
  .on("error", notify.onError({
    message:  "Error: <%= error.message %>",
    title:    "Error running html/include task"
  }))
  .pipe(gulp.dest(distPath))
  .pipe(livereload());
});

// Other files task
gulp.task('other', function () {
  return gulp
  .src([srcPath + assetsPath + 'other/**/*'])
  .on("error", notify.onError({
    message:  "Error: <%= error.message %>",
    title:    "Error running other task"
  }))
  .pipe(gulp.dest(distPath + assetsPath + 'other'))
  .pipe(livereload());
});

// Images task
gulp.task('images', function () {
  return gulp
  .src(srcPath + assetsPath + 'img/**')
  .pipe(imagemin())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running image/imagemin task"
 }))
  .pipe(gulp.dest(distPath + assetsPath + 'img'));
});

// Webp task
gulp.task('webp', function () {
  if(generateWebpImages){
    return gulp
    .src(srcPath + assetsPath + 'img/**/*.{png,jpg}')
    .pipe(cwebp())
    .on("error", notify.onError({
     message:   "Error: <%= error.message %>",
     title:     "Error running image/cwebp task"
   }))
    .pipe(gulp.dest(distPath + assetsPath + 'img/webp'));
  }
});

// SvgToPng  task
gulp.task('svgpng', function () {
  return gulp
  .src(srcPath + assetsPath + 'img/**/*.svg')
  .pipe(svg2png())
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running svg to png task"
 }))
  .pipe(gulp.dest(distPath + assetsPath + 'img'))
  .pipe(livereload());
});

// Iconfont
gulp.task('iconfont', function() {
  var fontName = iconFontName;
  return gulp.src(srcPath + assetsPath + 'iconfont/*.svg')
  .pipe(iconfontCss({
    fontName: fontName,
    path: srcPath + assetsPath + 'iconfont/' + iconFontTemplateFile,
    targetPath: '../../sass/utils/' + iconFontDefinitionsFile,
    fontPath: '../' + fontsDirectory + '/'
  }))
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running iconfont/iconfont-css task"
 }))
  .pipe(iconfont({
    fontName: fontName
  }))
  .on("error", notify.onError({
   message:   "Error: <%= error.message %>",
   title:     "Error running iconfont/iconfont task"
 }))
  .pipe(gulp.dest(srcPath + assetsPath + fontsDirectory))
  .pipe(livereload());
});

// Clean assets folders
gulp.task('clean', function (cb) {
  runSequence('cleanDist', 'cleanCmsAssets');
});

// Clean 'dist' folder
gulp.task('cleanDist', function (cb) {
  return del(distPath);
});

// Clean 'cms' folder
gulp.task('cleanCmsAssets', function (cb) {
  if(cmsAssets){
    return del(cmsAssetsPath);
  }
});

// Distribute Scripts to CMS task
gulp.task('cmsScripts', function () {
  if(cmsAssets){
    return gulp
    .src(distPath + assetsPath + 'js/**/*')
    .on("error", notify.onError({
      message:  "Error: <%= error.message %>",
      title:    "Error running cmsScripts task"
    }))
    .pipe(gulp.dest(cmsAssetsPath + 'js/'));
  }
});

// Distribute Styles to CMS task
gulp.task('cmsStyles', function () {
  if(cmsAssets){
    return gulp
    .src(distPath + assetsPath + 'css/*.css')
    .on("error", notify.onError({
      message:  "Error: <%= error.message %>",
      title:    "Error running cmsStyles task"
    }))
    .pipe(gulp.dest(cmsAssetsPath + 'css/'));
  }
});

// Distribute Images to CMS task
gulp.task('cmsImages', function () {
  if(cmsAssets){
    return gulp
    .src(distPath + assetsPath + 'img/**/*')
    .on("error", notify.onError({
      message:  "Error: <%= error.message %>",
      title:    "Error running cmsImages task"
    }))
    .pipe(gulp.dest(cmsAssetsPath + 'img/'));
  }
});

// Distribute Fonts to CMS task
gulp.task('cmsFonts', function () {
  if(cmsAssets){
    return gulp
    .src(distPath + assetsPath + 'fonts/**/*')
    .on("error", notify.onError({
      message:  "Error: <%= error.message %>",
      title:    "Error running cmsFonts task"
    }))
    .pipe(gulp.dest(cmsAssetsPath + 'fonts/'));
  }
});

// Distribute Other to CMS task
gulp.task('cmsOther', function () {
  if(cmsAssets){
    return gulp
    .src(distPath + assetsPath + 'other/**/*')
    .on("error", notify.onError({
      message:  "Error: <%= error.message %>",
      title:    "Error running cmsOther task"
    }))
    .pipe(gulp.dest(cmsAssetsPath + 'other/'));
  }
});

// Watch task
gulp.task('watch', function() {

  gulp.watch(watchPaths.scripts, ['scripts']);
  gulp.watch(watchPaths.vendorScripts, ['vendorScripts']);
  gulp.watch(watchPaths.images, ['images']);
  gulp.watch(watchPaths.images, ['webp']);
  gulp.watch(watchPaths.iconfont, ['iconfont']);
  gulp.watch(watchPaths.sass, ['sass']);
  gulp.watch(watchPaths.html, ['html']);
  gulp.watch(watchPaths.fonts, ['fonts']);
  gulp.watch(watchPaths.svgpng, ['svgpng']);
  gulp.watch(watchPaths.other, ['other']);

  if(cmsAssets){
    gulp.watch(watchDistPaths.scripts, ['cmsScripts']);
    gulp.watch(watchDistPaths.css, ['cmsStyles']);
    gulp.watch(watchDistPaths.images, ['cmsImages']);
    gulp.watch(watchDistPaths.fonts, ['cmsFonts']);
    gulp.watch(watchDistPaths.other, ['cmsOther']);
  }

  livereload.listen();
});


// Build task
gulp.task('build', function(callback){
  runSequence('iconfont', ['scripts', 'vendorScripts', 'images', 'webp', 'sass', 'fonts', 'html', 'svgpng', 'other'], ['cmsScripts', 'cmsStyles', 'cmsImages', 'cmsFonts', 'cmsOther'], callback);
});

// Default task
gulp.task('default', function(callback){
  runSequence('build', 'watch', callback);
});