/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

const server = {
  entry: {
    server: './src/server/server.ts'
  },
  module: {
    rules: [
      {
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    new RemovePlugin({
      before: {
        include: [
          __dirname + "/dist/server"
        ]
      },
      watch: {
        include: [
          __dirname + "/dist/server"
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: __dirname + "/dist/server"
  },
  target: 'node',
};

const client = {
  entry: {
    client: './src/client/client.ts'
  },
  module: {
    rules: [
      {
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [
          __dirname + "/dist/client"
        ]
      },
      watch: {
        include: [
          __dirname + "/dist/client"
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: __dirname + "/dist/client",
  },
};

const shared = {
  entry: {
    utils: './src/shared/utils.ts',
    config: './src/shared/config.ts'
  },
  module: {
    rules: [
      {
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [
          __dirname + "/dist/shared"
        ]
      },
      watch: {
        include: [
          __dirname + "/dist/shared"
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: __dirname + "/dist/shared",
  },
};

const locale = {
  entry: {
    en: './src/locale/en.ts',
    el: './src/locale/el.ts'
  },
  module: {
    rules: [
      {
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [
          __dirname + "/dist/locale"
        ]
      },
      watch: {
        include: [
          __dirname + "/dist/locale"
        ]
      }
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: __dirname + "/dist/locale",
  },
};

module.exports = [server, client, shared, locale];
