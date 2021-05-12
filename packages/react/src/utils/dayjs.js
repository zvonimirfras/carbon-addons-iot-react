import dayjs from 'dayjs';

const localizedFormat = require('dayjs/plugin/localizedFormat');
const utc = require('dayjs/plugin/utc');
const pluralGetSet = require('dayjs/plugin/pluralGetSet');
const timezone = require('dayjs/plugin/timezone');
const localeData = require('dayjs/plugin/localeData');

dayjs.extend(localizedFormat); // gives the 'L' formatting ability for .format
dayjs.extend(utc); // gives .utc() and .local()
dayjs.extend(pluralGetSet); // gives .hour .minute get/set ability
dayjs.extend(timezone); // timezone support
dayjs.extend(localeData); // gives local specific data

// dayjs doesn't load locale data automatically, specify locales to include in bundle here
[
  'af',
  'am',
  'ar-dz',
  'ar-kw',
  'ar-ly',
  'ar-ma',
  'ar-sa',
  'ar-tn',
  'ar',
  'az',
  'be',
  'bg',
  'bi',
  'bm',
  'bn',
  'bo',
  'br',
  'bs',
  'ca',
  'cs',
  'cv',
  'cy',
  'da',
  'de-at',
  'de-ch',
  'de',
  'dv',
  'el',
  'en-au',
  'en-ca',
  'en-gb',
  'en-ie',
  'en-il',
  'en-in',
  'en-nz',
  'en-sg',
  'en-tt',
  'en',
  'eo',
  'es-do',
  'es-pr',
  'es-us',
  'es',
  'et',
  'eu',
  'fa',
  'fi',
  'fo',
  'fr-ca',
  'fr-ch',
  'fr',
  'fy',
  'ga',
  'gd',
  'gl',
  'gom-latn',
  'gu',
  'he',
  'hi',
  'hr',
  'ht',
  'hu',
  'hy-am',
  'id',
  'is',
  'it-ch',
  'it',
  'ja',
  'jv',
  'ka',
  'kk',
  'km',
  'kn',
  'ko',
  'ku',
  'ky',
  'lb',
  'lo',
  'lt',
  'lv',
  'me',
  'mi',
  'mk',
  'ml',
  'mn',
  'mr',
  'ms-my',
  'ms',
  'mt',
  'my',
  'nb',
  'ne',
  'nl-be',
  'nl',
  'nn',
  'oc-lnc',
  'pa-in',
  'pl',
  'pt-br',
  'pt',
  'ro',
  'ru',
  'rw',
  'sd',
  'se',
  'si',
  'sk',
  'sl',
  'sq',
  'sr-cyrl',
  'sr',
  'ss',
  'sv',
  'sw',
  'ta',
  'te',
  'tet',
  'tg',
  'th',
  'tk',
  'tl-ph',
  'tlh',
  'tr',
  'tzl',
  'tzm-latn',
  'tzm',
  'ug-cn',
  'uk',
  'ur',
  'uz-latn',
  'uz',
  'vi',
  'yo',
  'zh-cn',
  'zh-hk',
  'zh-tw',
  'zh',
].forEach((locale) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(`dayjs/locale/${locale}.js`);
});

export default dayjs;
