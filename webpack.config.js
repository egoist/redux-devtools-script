module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: __dirname,
    filename: 'redux-devtools-script.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: [/node_modules/] }
    ]
  },
  plugins: []
}
