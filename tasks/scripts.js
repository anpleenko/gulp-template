import gulp from 'gulp';
import { config, $, bs, notify, isProd, isDev } from './config';

gulp.task('scripts', () =>
  gulp.src(config.src.scripts)
    .pipe($.if(isDev, $.plumber({ errorHandler: notify('Scripts error') })))
    .pipe($.debug())
    .pipe($.include())
    .pipe($.babel(config.babel))
    .pipe($.if(isProd, $.uglify()))
    .pipe($.addSrc('./node_modules/jquery/dist/jquery.min.js'))
    .pipe(gulp.dest(config.dest.scripts))
    .on('end', bs.reload)
);

gulp.task('libs', gulp.series('scripts'));
