import gulp from 'gulp';
import { config, bs } from './config';

gulp.task('server', (cb) => {
  bs({
    server: {
      baseDir: config.dest.app,
    },
    open: false,
  });

  cb();
});
