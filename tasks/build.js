import gulp from 'gulp';
import { config, $ } from './config';

gulp.task('delete_dist', () =>
  $.del([config.dest.app])
);

gulp.task('zip', () =>
  gulp.src('./dist/**')
    .pipe($.zip('project.zip'))
    .pipe(gulp.dest(config.dest.app))
);
