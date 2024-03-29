const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  devtool: isProduction ? 'hidden-source-map' : 'eval-source-map',
  devServer: {
    static: {
      directory: join(__dirname, 'public'),
    },
    historyApiFallback: true,
    port: 3001,
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    modules: ['node_modules'],
    alias: { '~': join(__dirname, '.', 'src/') },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          target: 'esnext',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg|webp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          publicPath: './',
          name: '[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, './public/index.html'),
      hash: true,
      favicon: join(__dirname, './public/favicon.ico'),
    }),
  ],
};
