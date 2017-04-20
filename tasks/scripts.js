import gulp from 'gulp';
import { config, $, bs, errorHandler } from './config';

gulp.task('scripts', () =>
  gulp.src(config.src.scripts)
    .pipe($.include())
      .on('error', errorHandler)

    .pipe($.babel(config.babel))
      .on('error', errorHandler)

    .pipe($.concat('main.js'))

    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))

    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

gulp.task('libs', gulp.series('scripts'));
