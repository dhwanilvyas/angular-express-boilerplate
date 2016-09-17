module.exports = function(gulp, plugins) {

  gulp.task('lint', function () {

    gulp.src(['app/**/*.js', '!node_modules/**'])
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());

  });

}
