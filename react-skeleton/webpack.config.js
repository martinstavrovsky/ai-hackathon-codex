const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  devServer: {
    // Serve public assets (e.g. stub JSON) and the built bundle
    static: [
      { directory: path.resolve(__dirname, 'public') },
      { directory: path.resolve(__dirname, 'dist') }
    ],
    // SPA fallback for React Router (if used)
    historyApiFallback: true
  }
};
