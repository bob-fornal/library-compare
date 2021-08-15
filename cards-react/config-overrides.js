
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@core': 'src/core',
    '@pages': 'src/pages',
    '@shared': 'src/shared'
  })(config);

  return config;
}
