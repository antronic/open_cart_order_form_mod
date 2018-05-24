/* eslint-disable */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',

  entry: [
    'babel-polyfill',

    './src/index.js',
  ],

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'order_form_mod.js', // string
    // the filename template for entry chunks

    publicPath: '/assets/', // string
    // the url to the output directory resolved relative to the HTML page

    library: 'order_form_mod', // string,
    // the name of the exported library

    libraryTarget: 'umd', // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve('./src'),
        exclude: /node_modules/,

        loader: require.resolve('babel-loader'),

        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
        }
      },
    ],
  },

  plugins: [
    // Minify the code.
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /node_modules/,
      sourceMap: true,

      uglifyOptions: {
        ecma: 8,
        warnings: true,

        compress: {

        },
        output: {
          comments: false,
          beautify: false,
        },
        toplevel: false,
        nameCache: null,
        ie8: true,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: true,
      }
    }),
  ],
}