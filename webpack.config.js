const dev = process.env.NODE_ENV !== 'production';
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const plugins = [
  new FriendlyErrorsWebpackPlugin(),
];

if (!dev) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'webpack-report.html',
    openAnalyzer: false,
  }));
}
console.info('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  devtool: dev ? 'none' : 'source-map',
  entry: {
    app: 'index.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins,
};
