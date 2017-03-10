import gulp from 'gulp';
import { config, $, bs, errorLogFunc } from './config';

const source = [
  config.src.scripts,
];

gulp.task('scripts', () =>
  gulp.src(source)
    .pipe($.babel(config.babel))
      .on('error', errorLogFunc)
    .pipe($.concat('main.js'))
    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

const libSource = [
  './node_modules/jquery/dist/jquery.min.js',
];

gulp.task('npm_modules', () =>
  gulp.src(libSource)
    .pipe(gulp.dest(config.dest.scripts))
);

const smallScript = [
  // './node_modules/bootstrap-only-js/lib/modal.js',
];

gulp.task('small_script', () =>
  gulp.src(smallScript)
    .pipe($.concat('libs.js'))
    .pipe(gulp.dest(config.dest.scripts))
);

gulp.task('libs', gulp.series(
  'scripts',
  'npm_modules',
  'small_script',
));
