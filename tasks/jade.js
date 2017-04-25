import gulp from 'gulp';
import { config, $, bs, errorHandler, isDev, isProd } from './config';
import data from '../src/data';

gulp.task('jade', () => {
  return gulp.src([config.src.jade])
    .pipe($.jade({
      locals: { ...data, DEV: isDev, PROD: isProd },
    }))
      .on('error', errorHandler)

    .pipe($.posthtml(config.POSTHTML_PROCESSORS))
    .pipe($.if(isDev, $.jsbeautifier(config.jsbeautifierConfig)))

    .pipe(gulp.dest(config.dest.app))
    .on('end', bs.reload);
});
