import gulp from 'gulp';
import del from 'del';
import { config, $ } from './config';

gulp.task('imagemin_clear', () =>
  del([config.dest.images])
);

gulp.task('imagemin_build', () =>
  gulp.src(config.src.images)
    .pipe($.imagemin({ progressive: true }))
    .pipe(gulp.dest(config.dest.images))
);

gulp.task('images', gulp.series('imagemin_clear', 'imagemin_build'));
