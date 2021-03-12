const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      exclude: [],
    },
  },
  // ...
};
