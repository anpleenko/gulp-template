import gulp from 'gulp';
import { config, $, notify } from './config';

gulp.task('imagemin_clear', () =>
  $.del([config.dest.images])
);

gulp.task('imagemin_build', () =>
  gulp
    .src(config.src.images)
    .pipe($.plumber({ errorHandler: notify('Images error') }))
    .pipe($.flatten())
    .pipe($.imagemin({ progressive: true }))
    .pipe(gulp.dest(config.dest.images))
);

gulp.task('images', gulp.series(
  'imagemin_clear',
  'imagemin_build',
));
