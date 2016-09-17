// Include all the gulp tools required
var gulp = require('gulp');

// This will load all the plugins with prefix 'gulp-'
// so no need to include those plugins here
var plugins = require('gulp-load-plugins')();

// Loads all the gulp tasks
require('load-gulp-tasks')(gulp, plugins);

gulp.task('default', [
  'scripts:vendor',
  'scripts:app',
  'sass',
  'watch'
]);
