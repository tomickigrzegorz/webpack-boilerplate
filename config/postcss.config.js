module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['last 2 versions', 'iOS >= 8']
    },
    'postcss-url': {
      url: 'inline',
      maxSize: 50
    },
    'cssnano': {
      safe: true
    }
  }
};