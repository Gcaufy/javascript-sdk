const { create, entry, name } = require('./common');

const config = create();

config.entry = {
  [`${name}`]: entry,
  [`${name}-min`]: entry,
};

config.module.loaders.push({
  test: /\.js$/,
  enforce: 'pre',
  exclude: /(node_modules|bower_components|\.spec\.js)/,
  use: [
    {
      loader: 'webpack-strip-block',
      options: {
        start: 'NODE-ONLY:start',
        end: 'NODE-ONLY:end'
      }
    }
  ]
});

module.exports = config;
