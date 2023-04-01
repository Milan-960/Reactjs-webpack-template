/* eslint-disable no-undef */
import { resolve, join } from 'path';

export const entry = './src/index.js';

export const output = {
  path: resolve(__dirname, 'public'),
  filename: 'bundle.js',
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
};
export const devServer = {
  static: {
    directory: join(__dirname, 'public'),
  },
  port: 3000,
  hot: true,
};
