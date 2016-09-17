var argv = require('yargs').argv;

module.exports = function(gulp, plugins) {

  gulp.task('bump', function(){

    var version = argv.appversion ? argv.appversion : 'major';

    gulp.src(['./package.json', './bower.json'])
      .pipe(plugins.bump({key: 'version', type: version}))
      .pipe(gulp.dest('./'));

  });

}
