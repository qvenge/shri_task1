const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProductionBuild = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProductionBuild ? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'stories.js',
    path: path.resolve(__dirname, 'build'),
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
    new MiniCssExtractPlugin({
      filename: 'stories.css',
      // ignoreOrder: false,
    }),
  ],
};
