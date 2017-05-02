import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

export const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'del'],
});

export const bs = browserSync;

export const isDev = (process.env.NODE_ENV || 'development') === 'development';
export const isProd = (process.env.NODE_ENV || 'development') === 'production';

export const AUTOPREFIXER_CONFIG = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

export const notify = (title = 'Error running something') =>
  $.notify.onError({
    message: 'Error: <%= error.message %>',
    title,
  });

export const config = {
  src: {
    style: './src/style/**/!(_)*.scss',
    jade: './src/pages/!(_)*.jade',
    layouts: './src/layouts/*.jade',
    components: './src/components/**/*.jade',
    data: './src/data/**/*.js',
    scripts: './src/scripts/!(_)*.js',
    misc: './src/misc/**',
    images: [
      './src/images/**',
      './src/components/**/*.{jpg,png,svg}',
    ],
  },

  watch: {
    scripts: [
      './src/scripts/**/*.js',
      './src/components/**/*.js',
    ],

    style: [
      './src/style/**/*.scss',
      './src/components/**/*.scss',
    ],
  },

  jsbeautifierConfig: {
    braceStyle: 'expand',
    indentWithTabs: true,
    indentInnerHtml: true,
    preserveNewlines: true,
    endWithNewline: true,
    wrapLineLength: 120,
    maxPreserveNewlines: 50,
    wrapAttributesIndentSize: 1,
    unformatted: ['use'],
  },

  dest: {
    scripts: './dist/js/',
    style: './dist/css/',
    app: './dist/',
    images: './dist/img/',
    misc: './dist/',
  },

  POSTHTML_PROCESSORS: [
    require('posthtml-bem')({
      elemPrefix: '__',
      modPrefix: '_',
      modDlmtr: '--',
    }),
  ],

  PROCESSORS: [
    require('autoprefixer')({ browsers: AUTOPREFIXER_CONFIG }),
    require('css-mqpacker'),
    require('postcss-discard-comments')({ removeAll: true }),
    require('postcss-csso'),
  ],

  PERFECTIONIST: [
    require('perfectionist')
  ],

  babel: {
    comments: false,
    presets: ['es2015'],
  },
};
