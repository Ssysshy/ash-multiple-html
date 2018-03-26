module.exports = {
  framework: 'html',
  entry: 'src',
  devtool: 'source-map',
  template: 'view/layout.html',
  alias: {
    asset: 'asset',
    jquery: 'asset/js/jquery-3.2.1.min.js'
  },
  externals: {
    jquery: 'window.$'
  },
  loaders: {
    scss: true,
    nunjucks: {
      options: {
        searchPaths: ['./widget', './test']
      }
    }
  },
  plugins: {},
  proxy: {
    host:  'http://localhost:8888',   
    match: /\/debug/
  },
  done() {

  }
};