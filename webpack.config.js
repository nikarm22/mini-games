const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => ({
  entry: `./src/games/${env.game}/index.ts`,
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: `./${env.game}/bundle.js`,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/shared/templates/gamePage.html', to: `./${env.game}/index.html` },
    ]),
  ]
});