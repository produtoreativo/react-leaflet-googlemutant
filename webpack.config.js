var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/components/index.js",
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
            presets: ['env', "es2015", "react", "stage-0"],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
};
