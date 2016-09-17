module.exports = function(gulp, plugins) {

  gulp.task('watch', function() {
    gulp.watch(['app/client/*.js', 'app/client/modules/**/*.js'], ['scripts:app']);
    gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
  });

}
