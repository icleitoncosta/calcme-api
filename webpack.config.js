const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
    },
  },
  output: {
    filename: 'calcMe-Func.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'MCALC',
      type: 'umd',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DefinePlugin({
      __VERSION__: `'${packageJSON.version}'`,
    }),
  ],
};
