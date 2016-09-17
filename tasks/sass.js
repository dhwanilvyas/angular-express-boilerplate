module.exports = function(gulp, plugins) {

  gulp.task('sass', function() {

    gulp.src('sass/base.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('./public/stylesheets/'));

  });

}
