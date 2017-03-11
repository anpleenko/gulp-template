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

gulp.task('libs', gulp.series('scripts'));
