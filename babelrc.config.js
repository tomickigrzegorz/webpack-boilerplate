'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // debug: true,
        // useBuiltIns: 'usage',
        useBuiltIns: 'entry',
        corejs: 3,
        // https://babeljs.io/docs/en/babel-preset-env#loose
        // https://2ality.com/2015/12/babel6-loose-mode.html#loose-mode
        loose: true,
      },
    ],
  ],
};
