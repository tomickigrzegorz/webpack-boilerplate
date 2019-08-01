module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-url': {
      url: 'inline',
      maxSize: 50
    },
    'cssnano': {
      safe: true
    }
  }
};