import gulp from 'gulp';
import { config, $, bs, errorLogFunc } from './config';

const source = [
  './src/scripts/variables.js',
];

gulp.task('scripts', () =>
  gulp.src(source)
    .pipe($.addSrc('./src/scripts/main.js'))

    .pipe($.babel(config.babel))
      .on('error', errorLogFunc)

    .pipe($.concat('main.js'))

    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))

    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

const libsSrc = [
  //'./node_modules/bootstrap-only-js/lib/modal.js',
];

gulp.task('libs', () =>
  gulp.src(libsSrc)
    .pipe($.concat('libs.js'))
    .pipe(gulp.dest(config.dest.scripts))
);

gulp.task('libs', gulp.series(
  'scripts',
  // 'libs',
));
