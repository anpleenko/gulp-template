import gulp from 'gulp';
import { config } from './config';

gulp.task('watch', (cb) => {
  gulp.watch(config.src.scripts, gulp.parallel('scripts'));
  gulp.watch(config.src.images, gulp.parallel('images'));
  gulp.watch(config.src.dataJson, gulp.parallel('jade'));
  gulp.watch(config.src.misc, gulp.parallel('misc'));

  gulp.watch([
    './src/style/**/*.scss',
    './src/components/**/*.scss',
  ], gulp.parallel('style'));

  gulp.watch([
    config.src.jade,
    config.src.layouts,
    config.src.components,
  ], gulp.parallel('jade'));

  cb();
});
