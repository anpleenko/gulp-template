import gulp from 'gulp';
import { config, $, bs } from './config';

const reload = bs.reload;

const source = [
  './node_modules/bootstrap-only-css/lib/scaffolding.css',
  './node_modules/bootstrap-only-css/lib/utilities.css',
  './node_modules/bootstrap-only-css/lib/normalize.css',
  './node_modules/bootstrap-only-css/lib/type.css',
  './node_modules/bootstrap-only-css/lib/grid.css',
  './node_modules/bootstrap-only-css/lib/responsive-utilities.css',
  './node_modules/bootstrap-only-css/lib/responsive-embed.css',
  './node_modules/bootstrap-only-css/lib/component-animations.css',
  './node_modules/bootstrap-only-css/lib/modals.css',
  config.src.style,
  './node_modules/css.modifiers/dist/modifiers.css',
];

// const since = {
//   since: gulp.lastRun('style')
// }

gulp.task('style', () =>
  gulp.src(source)
    .pipe($.sassGlobImport())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat('style.css'))
    .pipe($.postcss(config.PROCESSORS))
    .pipe($.csso())
    .pipe($.postcss(config.PROCESSORS_PERFECTIONIST))
    .pipe(gulp.dest(config.dest.style))
    .pipe(reload({ stream: true }))
);
