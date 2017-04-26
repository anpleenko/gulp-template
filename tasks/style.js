import gulp from 'gulp';
import { config, $, bs, errorHandler, isDev } from './config';

const reload = bs.reload;

const source = [
  config.src.style,
];

gulp.task('style', () =>
  gulp.src(source)
    .pipe($.sassGlobImport())
    .pipe($.sass()
      .on('error', errorHandler))
    .pipe($.postcss(config.PROCESSORS))
    .pipe($.if(isDev, $.postcss(config.PERFECTIONIST)))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
