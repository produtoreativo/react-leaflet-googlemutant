var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/react-leaflet-googlemutant/index.js",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "react-leaflet-googlemutant.js",
    library: "ReactLeafletGoogleMutant",
    libraryTarget: "umd"
  },
  externals: {
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react-leaflet': {
      commonjs2: 'react-leaflet',
      commonjs: 'react-leaflet',
      amd: 'react-leaflet'
    },
    'leaflet': {
      commonjs2: 'leaflet',
      commonjs: 'leaflet',
      amd: 'leaflet'
    }
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.EnvironmentPlugin(['__VERSION__'])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["react", "es2015", "stage-0"],
            plugins: [
              ['transform-runtime', {
                "helpers": false,
                "polyfill": false,
                "regenerator": false,
                "moduleName": "babel-runtime"
              }]
            ]
          }
        }
      }
    ]
  }
};
