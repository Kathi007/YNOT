const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../firebase/public'),
  devServer: {
    proxy: 'http://127.0.0.1:3001',
    // proxy: 'http://193.170.162.166:3001',
  },
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
