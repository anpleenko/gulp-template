import gulp from 'gulp';
import browserSync from 'browser-sync';
import { config, $ } from './config';

gulp.task('misc', () =>
  gulp.src(config.src.misc)
    .pipe(gulp.dest(config.dest.misc))
    .on('end', browserSync.reload)
);
