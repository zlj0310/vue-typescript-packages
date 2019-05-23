const webpackMerge = require('webpack-merge')
const VUE_CONFIG = require('../../config/vue.config');

module.exports = webpackMerge(
  VUE_CONFIG,
);
