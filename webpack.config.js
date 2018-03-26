module.exports = {
  framework: 'html',
  devtool: 'source-map',
  entry: {
    include: 'page',
    template: 'layout/layout.html'
  },
  alias: {
    asset: 'asset',
    vue: 'vue/dist/vue.js'
  },
  externals: {
    jquery: 'window.$'
  },
  loaders: {
    less: true,
    nunjucks: {
      options: {
        searchPaths: ['./view']
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
