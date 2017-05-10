import gulp from 'gulp';
import { config, $, bs, notify, isDev, isProd } from './config';

gulp.task('jade', () => {
  const data = require('../src/data');

  return gulp.src([config.src.jade])
    .pipe($.if(isDev, $.plumber({ errorHandler: notify('Jade error') })))
    .pipe($.debug())
    .pipe(
      $.jade({
        locals: { ...data.default, DEV: isDev, PROD: isProd },
      }),
    )
    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))
    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload);
});
