const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProductionBuild = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProductionBuild ? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  entry: ['webpack-hot-middleware/client', './index.js'],
  output: {
    filename: 'stories.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true,
  },
  devtool: !isProductionBuild ? 'inline-source-map' : undefined,
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        },
      },
      {
        test: /\.pug$/i,
        use: 'pug-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'images'),
          to: path.resolve(__dirname, 'build', 'images'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'stories.css',
      // ignoreOrder: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
