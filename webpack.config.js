// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    example: './example.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new MediaQueryPlugin({
      include: [
        'example',
      ],
      queries: {
        'screen and (min-width: 800px)': 'medium',
        'screen and (min-width: 1200px)': 'large'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          MediaQueryPlugin.loader,
          'postcss-loader'
        ],
      },
    ]
  }
};
