
# Webpack Boilerplate
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Minimal Webpack 4 boilerplate with Babel, core-js, Sass, Pug, ESlint and a lot mor.
It also includes optimization for development and production build.

## Clone the repo and install dependencies
```bash
git clone https://github.com/tomik23/webpack-boilerplate.git
cd webpack-boilerplate
npm i
```
## Usage

### Development server

```bash
npm start
```

### Production build

```bash
npm run build
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Core-js](https://github.com/zloirock/core-js/)
- [Pug](https://github.com/pugjs/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development and production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code
  - [`eslint`](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
  - [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/) - This package provides Airbnb's base JS
  - [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier
  - [`eslint-plugin-html`](https://github.com/BenoitZugmeyer/eslint-plugin-html/) An ESLint plugin to extract and lint scripts from HTML files
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import/) ESLint plugin with rules that help validate proper imports
  - [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier/) ESLint plugin for Prettier formatting
- [`core-js](https://github.com/zloirock/core-js/) - Modular standard library for JavaScript, includes many polyfills

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader/) - @import your SASS resources into every required SASS module
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS
  - [`autoprefixer`](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS
- [`pug-loader`](https://github.com/pugjs/pug-loader/) - Pug loader template
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template in our case pug
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript
- [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin) - Generates a service worker using sw-precache

## License

This project is open source and available under the [MIT License](LICENSE).