import gulp from 'gulp';
import { config, $, bs, notify, isDev } from './config';

const reload = bs.reload;

const source = [
  config.src.style,
];

gulp.task('style', () =>
  gulp.src(source)
    .pipe($.if(isDev, $.plumber({ errorHandler: notify('Style error') })))
    .pipe($.debug())
    .pipe($.sassGlobImport())
    .pipe($.sass())
    .pipe($.postcss(config.PROCESSORS))
    .pipe($.if(isDev, $.postcss(config.PERFECTIONIST)))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
