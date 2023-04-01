# How to configure webpack from scratch

**_Create a new directory for your project and navigate to it in your terminal._**

## Follow up the steps!

## Initialize a new npm package by running the following command in your terminal and following the prompts:

```
npm init
```

## Now you will need to install the necessary dependencies for the project by running the following command in your terminal:

```
npm install --save react react-dom
```

## we are installing all the necessary dependencies at once!

```
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier
```

### Note: This will install `React`, `React-DOM`, `Webpack`, `Webpack` `CLI`, `Webpack` `Dev` `Server`, `Babel`, `ESLint`, `Prettier`, and some `loaders` and `plugins`.

## Now Create a new file called `webpack.config.js` in the root of your project with the following contents:

`webpack.config.js`

```const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
  },
};

```

<h3>After that </h3>

## Create a new file called `.babelrc` in the root of your project with the following contents:

`.babelrc`

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

This will set up Babel to use the `@babel/preset-env` and `@babel/preset-react presets`
