import gulp from 'gulp';
import { config, $, notify, isDev } from './config';

gulp.task('imagemin_clear', () =>
  $.del([config.dest.images])
);

gulp.task('imagemin_build', () =>
  gulp.src(config.src.images)
    .pipe($.if(isDev, $.plumber({ errorHandler: notify('Images error') })))
    .pipe($.debug())
    .pipe($.flatten())
    .pipe($.imagemin({ progressive: true }))
    .pipe(gulp.dest(config.dest.images))
);

gulp.task('images', gulp.series(
  'imagemin_clear',
  'imagemin_build',
));
