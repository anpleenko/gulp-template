import gulp from 'gulp';

require('require-dir')('tasks', { recurse: true });

gulp.task('build', gulp.series(
  'delete_dist',
  'jade',
  'style',
  'images',
  'misc',
  'libs',
));

gulp.task('default', gulp.series(
  'watch',
  'server',
));
