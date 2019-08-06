/* eslint-disable global-require, @typescript-eslint/no-var-requires */
const commonConfig = require('./config/common');

const isProd = process.env.NODE_ENV === 'production';
let addConfig;
if (isProd) {
  addConfig = require('./config/prod');
} else {
  addConfig = require('./config/dev');
}

module.exports = {
  isProd,
  ...commonConfig,
  ...addConfig,
};
