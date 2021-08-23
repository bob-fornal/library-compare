
const path = require('path');

const src = './src';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@Components': path.join(__dirname, src, 'components'),
        '@Core': path.join(__dirname, src, 'core'),
        '@Views': path.join(__dirname, src, 'views')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
};
