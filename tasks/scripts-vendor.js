module.exports = function (gulp, plugins) {

  var vendorFiles = [
    './bower_components/angular/angular.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/angular-bootstrap/ui-bootstrap.min.js'
  ];

  gulp.task('scripts:vendor', function() {
    gulp.src(vendorFiles)
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public/javascripts/'));
  });

};
