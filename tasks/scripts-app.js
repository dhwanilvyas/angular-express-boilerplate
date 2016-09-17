module.exports = function(gulp, plugins) {

  var appFiles = [
    './app/client/modules/about/about.js',
    './app/client/index.js'
  ];

  gulp.task('scripts:app', function () {

    gulp.src(appFiles)
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./public/javascripts/'));

  });

}
