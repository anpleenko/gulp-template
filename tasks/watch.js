import gulp from 'gulp';
import { config } from './config';

gulp.task('watch', (cb) => {
  gulp.watch(config.watch.scripts, gulp.parallel('scripts'));
  gulp.watch(config.watch.style, gulp.parallel('style'));
  gulp.watch(config.src.images, gulp.parallel('images'));
  gulp.watch(config.src.misc, gulp.parallel('misc'));

  gulp.watch([
    config.src.jade,
    config.src.layouts,
    config.src.components,
    config.src.data,
  ], gulp.parallel('jade'));

  cb();
});
